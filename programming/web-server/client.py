#!/bin/env python3
from socket import socket, AF_INET, SOCK_STREAM
from argparse import ArgumentParser

# 解析命令行参数
parser = ArgumentParser(description='Process a filename')
parser.add_argument('-host', nargs='?', default='localhost')
parser.add_argument('-port', nargs='?', default=12000, type=int)
parser.add_argument('-file', nargs='?', default='/')
parser.add_argument('-version', action='version', version='my-ncat 1.0')
args = parser.parse_args()

# 构造请求头
header = f'''GET {args.file} HTTP/1.1
Host:{args.host}
Connection:close
Accept-Language:zh-CN
User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.0 Safari/537.36

'''

# 创建tcp套接字
with socket(AF_INET, SOCK_STREAM) as client_socket:
    # 建立套接字连接
    client_socket.connect((args.host, args.port))

    client_socket.send(header.encode())

    # 循环读取套接字缓存，直到服务器关闭连接
    while True:
        http_message = client_socket.recv(4096).decode()
        if http_message == '':
            break
        print(http_message, end='')
