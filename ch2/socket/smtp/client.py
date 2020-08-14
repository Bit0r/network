from socket import socket, AF_INET, SOCK_STREAM
from dotenv import load_dotenv, find_dotenv
from os import getenv
from base64 import b64encode
from pathlib import Path

load_dotenv(find_dotenv(), override=True)
username = getenv('smtp_username')
password = getenv('smtp_password')
rcpt_to = mail_from = 'nie_wang@qq.com'

# Choose a mail server (e.g. Google mail server) and call it mailserver
mailserver = 'smtp.qq.com'


def sendMsg(msg, b64: bool = False):
    if isinstance(msg, str):
        data = msg.encode()
    elif isinstance(msg, Path):
        data = msg.read_bytes()
    else:
        data = msg
    if b64:
        data = b64encode(data)
    client_socket.send(data)


def printRecv(bufsize: int = 4096, corr_code: int = 250):
    recv = client_socket.recv(bufsize).decode()
    recv_code = int(recv[:3])
    if recv_code != corr_code:
        raise Exception(recv)
    print(recv)


with socket(AF_INET, SOCK_STREAM) as client_socket:
    # Create socket called client_socket and establish a TCP connection with mailserver
    client_socket.connect((mailserver, 25))
    printRecv(corr_code=220)

    # Send HELO command and print server response.
    sendMsg(f'HELO {mailserver}\r\n')
    printRecv()

    sendMsg('AUTH LOGIN\r\n')
    printRecv(corr_code=334)

    sendMsg(username, b64=True)
    sendMsg('\r\n')
    printRecv(corr_code=334)

    sendMsg(password, b64=True)
    sendMsg('\r\n')
    printRecv(corr_code=235)

    # Send MAIL FROM command and print server response.
    sendMsg(f'MAIL FROM:<{mail_from}>\r\n')
    printRecv()

    # Send RCPT TO command and print server response.
    sendMsg(f'RCPT TO:<{rcpt_to}>\r\n')
    printRecv()

    # Send DATA command and print server response.
    sendMsg('DATA\r\n')
    printRecv(corr_code=354)

    # SMTP DATA can use LF, but SMTP commands can only use CRLF
    # Send email header
    sendMsg(f'From:{mail_from}\nTo:{rcpt_to}\nSubject:Hello\n\n')

    # Send message data.
    sendMsg('I love computer networks.\nI love python, too.\n')

    # Message ends with a single period.
    sendMsg('\r\n.\r\n')

    # Send QUIT command and get server response.
    sendMsg('QUIT\r\n')
    printRecv()
