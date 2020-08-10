from socket import *

server_name = 'localhost'
server_port = 12000
clientSocket = socket(AF_INET, SOCK_DGRAM)

message = input('Input lowercase sentence:')
clientSocket.sendto(message.encode(), (server_name, server_port))
modified_message, _ = clientSocket.recvfrom(2048)
print(modified_message.decode())
clientSocket.close()
