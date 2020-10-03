#!/bin/env python3
from socket import socket, timeout, AF_INET, SOCK_DGRAM
from time import sleep, time
import pickle

with socket(AF_INET, SOCK_DGRAM) as client_socket:
    client_socket.settimeout(5)
    timeout_count = 0

    while True:
        try:
            send_time = time()
            client_socket.sendto(pickle.dumps(send_time), ('localhost', 12000))
            recv_time = pickle.loads(client_socket.recv(4096))
            timeout_count = 0
            sleep(5)
        except timeout:
            timeout_count += 1
            if timeout_count == 3:
                print('服务器离线')
                break
            else:
                continue
