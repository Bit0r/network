import re
from hashlib import shake_256
from pathlib import Path
from socket import AF_INET, SOCK_STREAM, socket, timeout


class ProxyServer:
    cacheable = ('GET', 'HEAD')
    noncacheable = ('PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH')
    regex_http = re.compile(r'^https?:\/\/([\w.]+)(\/.*)$', re.I)
    regex_last_modified = re.compile(r'^(Last-Modified|Date):\s?(.+?)\r?$',
                                     re.I | re.M)
    rfc_format = '%a, %d %b %Y %H:%M:%S GMT'

    def __init__(self, bufsize: int = 4096, listen_port=8000):
        self.BUFSIZE = bufsize
        self.listen_port = listen_port

    def main(self):
        with socket(AF_INET, SOCK_STREAM) as server_sock:
            # Create a server socket, bind it to a port and start listening
            server_sock.bind(('', self.listen_port))
            server_sock.listen(1)

            while True:
                try:
                    # Start receiving data from the client
                    print('\nReady to serve...')
                    self.connection_sock, addr = server_sock.accept()
                    print('Received a connection from:', addr)
                    self.message = self.connection_sock.recv(
                        self.BUFSIZE).decode()
                    print(self.message)

                    method, url = self.message.split()[0:2]
                    # Extract the domain and file_path from the given message
                    self.domain, self.file_path = self.regex_http.search(
                        url).groups()
                    print(self.domain, self.file_path)

                    self.message = f'{method} {self.file_path} HTTP/1.1\r\n' + self.message[
                        self.message.index('\n') + 1:]
                    self.message = self.message.replace(
                        '\nProxy-Connection:', '\nConnection:', 1)

                    if method in self.cacheable:
                        self.handleCacheable()
                    elif method in self.noncacheable:
                        self.handleNoncacheable()
                    else:
                        print('Unsupported HTTP method')
                except AttributeError:
                    print('Unsupported HTTP request')
                finally:
                    # Close the client
                    self.connection_sock.close()

    def handleCacheable(self):
        cache_hash = shake_256(
            (self.domain + self.file_path).encode()).hexdigest(16)
        try:
            # Check wether the file exist in the cache
            cache = Path(cache_hash).read_bytes()
            cache_message = cache.decode()
            if cache_message.split()[1] == '301':
                self.handle304(cache)
                return

            last_modified = self.regex_last_modified.search(cache_message)
            last_modified = last_modified.groups()[1]
            self.message = self.message[:
                                        -2] + 'If-Modified-Since:' + last_modified + '\r\n\r\n'
        except FileNotFoundError:
            pass
        except AttributeError:
            pass

        with socket(AF_INET, SOCK_STREAM) as client_sock:
            client_sock.connect((self.domain, 80))
            client_sock.send(self.message.encode())

            buffer = client_sock.recv(self.BUFSIZE)
            resp_code = int(buffer.decode().split()[1])
            if resp_code in (200, 301):
                self.handle200(client_sock, buffer, cache_hash)
            elif resp_code == 304:
                self.handle304(cache)  # type: ignore
            else:
                self.handleOther(client_sock, buffer)

    def handleNoncacheable(self):
        with socket(AF_INET, SOCK_STREAM) as client_sock:
            # 设置一个超时值，防止客户端一直占用连接，阻塞整个程序
            self.connection_sock.settimeout(5)
            client_sock.connect((self.domain, 80))
            try:
                client_sock.send(self.message.encode())
                while client_sock.send(self.connection_sock.recv(
                        self.BUFSIZE)) != 0:
                    pass
            except timeout:
                # 如果超时发生，而客户端尚未关闭，则尝试发回响应
                # 正确的做法是利用Content-Length首部头做好拆分，利用超时值是种偷懒的办法
                while self.connection_sock.send(client_sock.recv(
                        self.BUFSIZE)) != 0:
                    pass

    def handle200(self, client_sock: socket, buffer: bytes, cache_hash: str):
        # Create a new file in the cache for the requested file.
        with open(cache_hash, 'wb') as cache:
            while buffer != b'':
                cache.write(buffer)
                self.connection_sock.send(buffer)
                buffer = client_sock.recv(self.BUFSIZE)

    def handle304(self, cache: bytes):
        self.connection_sock.send(cache)
        print('Read from cache')

    def handleOther(self, client_sock: socket, buffer: bytes):
        client_sock.send(buffer)
        while self.connection_sock.send(client_sock.recv(self.BUFSIZE)) != 0:
            pass


server = ProxyServer(listen_port=8000)
server.main()
