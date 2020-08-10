from socket import *

server_port = 12000
serverSocket = socket(AF_INET, SOCK_DGRAM)
serverSocket.bind(('', server_port))
print('The server is ready to receive')
while True:
    message, client_address = serverSocket.recvfrom(2048)
    serverSocket.sendto(message.decode().upper().encode(), client_address)
