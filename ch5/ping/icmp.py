#!/usr/bin/env python3
import os
import select
import struct
import time
from socket import AF_INET, SOCK_RAW, gethostbyname, getprotobyname, socket

ICMP_ECHO_REQUEST = 8


def checksum(string: bytes):
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


def receiveOnePing(mySocket: socket, ID: int, timeout: float, destAddr: tuple):
    timeLeft = timeout
    while True:
        startedSelect = time.time()
        whatReady = select.select([mySocket], [], [], timeLeft)
        howLongInSelect = time.time() - startedSelect
        # Timeout
        if whatReady[0] == []:
            return None
        recPacket = mySocket.recvfrom(1024)[0]

        #Fetch the ICMP header from the IP packet
        icmp_type, icmp_code, _, _, icmp_seq = struct.unpack(
            '!bbHHh', recPacket[20:28])
        ttl = struct.unpack('!B', recPacket[8:9])[0]
        rtt = howLongInSelect
        if icmp_type == 0 and icmp_code == 0:
            return len(recPacket), icmp_seq, ttl, rtt
        elif icmp_type == 3:
            return icmp_code

        timeLeft = timeLeft - howLongInSelect
        if timeLeft <= 0:
            return None


def sendOnePing(mySocket: socket, destAddr: str, ID: int):
    # Header is type (8), code (8), checksum (16), id (16), sequence (16)
    myChecksum = 0
    # Make a dummy header with a 0 checksum
    # struct -- Interpret strings as packed binary data
    header = struct.pack("!bbHHh", ICMP_ECHO_REQUEST, 0, myChecksum, ID, 1)
    data = struct.pack("!d", time.time())
    # Calculate the checksum on the data and the dummy header.
    myChecksum = checksum(header + data)
    # Get the right checksum, and put in the header
    header = struct.pack("!bbHHh", ICMP_ECHO_REQUEST, 0, myChecksum, ID, 1)
    packet = header + data
    mySocket.sendto(packet,
                    (destAddr, 1))  # AF_INET address must be tuple, not str


def doOnePing(destAddr: str, timeout: float):
    icmp = getprotobyname("icmp")
    # SOCK_RAW is a powerful socket type. For more details: http://sock?raw.org/papers/sock_raw
    with socket(AF_INET, SOCK_RAW, icmp) as mySocket:
        myID = os.getpid() & 0xFFFF  # Return the current process i
        sendOnePing(mySocket, destAddr, myID)
        delay = receiveOnePing(mySocket, myID, timeout, destAddr)
    return delay


def ping(host: str, timeout: float = 1):
    # timeout=1 means: If one second goes by without a reply from the server,
    # the client assumes that either the client's ping or the server's pong is lost
    dest = gethostbyname(host)
    print(f"PING {host} ({dest}) using Python.")
    # Send ping requests to a server separated by approximately one second
    total = received = 0
    rtt_max = rtt_sum = 0
    rtt_min = float('inf')
    error_messages = [
        'Destination network unreachable', 'Destination host unreachable',
        'Destination protocol unreachable', 'Destination port unreachable',
        'Fragmentation required, and DF flag set', 'Source route failed',
        'Destination network unknown', 'Destination host unknown'
    ]
    while True:
        try:
            total += 1
            result = doOnePing(dest, timeout)
            if result is None:
                print('Request timed out')
            elif isinstance(result, int):
                print(f'{result}: {error_messages[result]}')
            else:
                received += 1
                rtt = result[3]

                rtt_sum += rtt
                if rtt > rtt_max:
                    rtt_max = rtt
                if rtt < rtt_min:
                    rtt_min = rtt

                print(
                    f'{result[0]} bytes from {host} ({dest}): icmp_seq={result[1]} ttl={result[2]} time={rtt*1e3:.3f} ms'
                )
            time.sleep(1)  # one second

        except KeyboardInterrupt:
            print(f'''
--- {host} ping statistics ---
{total} packets transmitted, {received} received, {(total-received)/total*100:.1f}% packet loss'''
                  )
            if received != 0:
                print(f'''
rtt min/max/avg = {rtt_min*1e3:.3f}/{rtt_max*1e3:.3f}/{rtt_sum/received*1e3:.3f} ms'''
                      )
            break


# ping("localhost")
# ping('www.baidu.com')
ping('www.google.com')
