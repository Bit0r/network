#!/usr/bin/env python3
import os
import select
import struct
from socket import (AF_INET, IP_TTL, IPPROTO_IP, SOCK_RAW, gethostbyaddr,
                    getprotobyname, herror, socket, timeout)
from time import time

ICMP_ECHO_REQUEST = 8
MAX_HOPS = 30
TIMEOUT = 2.0
TRIES = 1


def checksum(string):
    """ The packet that we shall send to each router along the path is the ICMP echo
    request packet, which is exactly what we had used in the ICMP ping exercise.
    We shall use the same packet that we built in the Ping exercise """

    csum = 0
    countTo = (len(string) // 2) * 2
    count = 0
    while count < countTo:
        thisVal = string[count + 1] * 256 + string[count]
        csum = csum + thisVal
        csum = csum & 0xffffffff
        count = count + 2
    if countTo < len(string):
        csum = csum + string[len(string) - 1].decode()
        csum = csum & 0xffffffff
    csum = (csum >> 16) + (csum & 0xffff)
    csum = csum + (csum >> 16)
    answer = ~csum
    answer = answer & 0xffff
    answer = answer >> 8 | (answer << 8 & 0xff00)
    return answer


def build_packet():
    """ In the sendOnePing() method of the ICMP Ping exercise ,firstly the header of our
    packet to be sent was made, secondly the checksum was appended to the header and
    then finally the complete packet was sent to the destination.
    Make the header in a similar way to the ping exercise.
    Append checksum to the header.
    Don’t send the packet yet , just return the final packet in this function.
    So the function ending should look like this
    Header is type (8), code (8), checksum (16), id (16), sequence (16) """

    myChecksum = 0
    myID = os.getpid() & 0xFFFF
    # Make a dummy header with a 0 checksum
    # struct -- Interpret strings as packed binary data
    header = struct.pack("!bbHHh", ICMP_ECHO_REQUEST, 0, myChecksum, myID, 1)
    data = struct.pack("!d", time())
    # Calculate the checksum on the data and the dummy header.
    myChecksum = checksum(header + data)
    # Get the right checksum, and put in the header
    header = struct.pack("!bbHHh", ICMP_ECHO_REQUEST, 0, myChecksum, myID, 1)
    packet = header + data
    return packet


def get_route(hostname):
    timeLeft = TIMEOUT
    for ttl in range(1, MAX_HOPS):
        for tries in range(TRIES):
            icmp = getprotobyname('icmp')

            # Make a raw socket named mySocket
            with socket(AF_INET, SOCK_RAW, icmp) as mySocket:
                mySocket.setsockopt(IPPROTO_IP, IP_TTL, struct.pack('I', ttl))
                mySocket.settimeout(TIMEOUT)
                try:
                    d = build_packet()
                    mySocket.sendto(d, (hostname, 0))
                    startedSelect = time()
                    whatReady = select.select([mySocket], [], [], timeLeft)
                    howLongInSelect = time() - startedSelect
                    if whatReady[0] == []:  # Timeout
                        print("* * * Request timed out.")

                    recvPacket, addr = mySocket.recvfrom(1024)
                    timeReceived = time()
                    timeLeft = timeLeft - howLongInSelect
                    if timeLeft <= 0:
                        print("* * * Request timed out.")
                except timeout:
                    continue
                else:
                    #Fetch the icmp type from the IP packet
                    size = struct.calcsize('!b')
                    types = struct.unpack('!b', recvPacket[20:20 + size])[0]

                    if types in (3, 11):
                        text = f'{ttl} rtt={(timeReceived - startedSelect) * 1e3:.0f} ms {addr[0]}'
                        try:
                            text += f'({gethostbyaddr(addr[0])[0]})'
                        except herror:
                            pass
                        print(text)
                    elif types == 0:
                        size = struct.calcsize("!d")
                        timeSent = struct.unpack("!d",
                                                 recvPacket[28:28 + size])[0]
                        print(
                            f"{ttl} rtt={(timeReceived - timeSent) * 1e3:.0f} ms {addr[0]}({hostname})"
                        )
                        return
                    else:
                        print("error")
                        break


get_route("www.baidu.com")
