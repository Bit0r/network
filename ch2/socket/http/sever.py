from time import gmtime, strftime, struct_time
from pathlib import Path
from socket import socket, AF_INET, SOCK_STREAM


def httpDate(time=gmtime()):
    if not isinstance(time, struct_time):
        time = gmtime(time)
    return strftime('%a, %d %b %Y %H:%M:%S GMT', time)


with socket(AF_INET, SOCK_STREAM) as server_socket:
    #Prepare a sever socket
    server_socket.bind(('', 12000))
    server_socket.listen(1)

    while True:
        #Establish the connection
        connection_socket, _ = server_socket.accept()

        # Get the request content
        message = connection_socket.recv(1024).decode()
        if message[:2] == '\r\n':
            connection_socket.close()
            continue

        # Set the common response header
        header_common = f'''
Connection:close
Server:Python/3.8.2 (Ubuntu)
Date:{httpDate()}

'''
        try:
            filename = message.split()[1]
            if filename == '/':
                filename = 'index.html'

            # Get file status
            p = Path.cwd() / filename
            file_stat = p.stat()

            header = f'''HTTP/1.1 200 OK
Content-Type:text/html
Last-Modified:{httpDate(file_stat.st_mtime)}
Content-Length:{file_stat.st_size}''' + header_common

            #Send one HTTP header line into socket
            connection_socket.send(header.encode())

            #Send the content of the requested file to the client
            connection_socket.send(p.read_bytes())
        except FileNotFoundError:
            #Send response message for file not found
            header = 'HTTP/1.1 404 Not Found' + header_common
            connection_socket.send(header.encode())
        finally:
            connection_socket.close()
