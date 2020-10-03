#!/bin/env python3
from socket import socket, timeout, AF_INET, SOCK_DGRAM
from time import time

numbers = 'one two three four five six seven eight nine ten'.split()
all_rtt = []

with socket(AF_INET, SOCK_DGRAM) as client_socket:
    client_socket.settimeout(1)

    for i in range(1, 11):
        try:
            start_time = time()
            client_socket.sendto(f'sequence {i}'.encode(),
                                 ('localhost', 12000))

            modified_seq = client_socket.recv(4096).decode()
            end_time = time()

            rtt = (end_time - start_time) * 1000
            all_rtt.append(rtt)

            print(f'Ping {modified_seq} {rtt:.1f} ms')
        except timeout:
            print('Request Timeout')

print(f'''
---statistics---
{round(100 - 10 * len(all_rtt))}% packet loss
rtt min/max/avg = {min(all_rtt):.3f}/{max(all_rtt):.3f}/{sum(all_rtt) / len(all_rtt):.3f} ms'''
      )
