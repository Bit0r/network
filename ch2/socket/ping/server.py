from socket import socket, AF_INET, SOCK_DGRAM
from random import randint

# Create a UDP socket
# Notice the use of SOCK_DGRAM for UDP packets
with socket(AF_INET, SOCK_DGRAM) as server_socket:
    # Assign IP address and port number to socket
    server_socket.bind(('', 12000))

    while True:
        # Generate random number in the range of 0 to 10
        rand = randint(0, 10)
        # Receive the client packet along with the address it is coming from
        message, address = server_socket.recvfrom(1024)
        # Capitalize the message from the client
        message = message.upper()
        # If rand is less is than 4, we consider the packet lost and do not respond
        if rand < 4:
            continue
        # Otherwise, the server responds
        server_socket.sendto(message, address)
