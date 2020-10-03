from socket import socket, AF_INET, SOCK_DGRAM
from time import time
import pickle

with socket(AF_INET, SOCK_DGRAM) as server_socket:
    server_socket.bind(('', 12000))
    clients = {}

    while True:
        # 接收心跳包并记录客户端
        pickle_heart_time, client_addr = server_socket.recvfrom(4096)
        clients[client_addr] = pickle.loads(pickle_heart_time)
        server_socket.sendto(pickle.dumps(time()), client_addr)

        # 打印已经离线的客户端并从字典中去除
        for addr, heart_time in clients.items():
            if time() - heart_time >= 15:
                print(f'{addr} 已离线')
        clients = {
            addr: heart_time
            for addr, heart_time in clients.items() if time() - heart_time < 15
        }
