from time import time

HEADER_SIZE = 12


class RtpPacket:
    header = bytearray(HEADER_SIZE)

    def encode(self, version: int, padding: int, extension: int, cc: int,
               seqnum: int, marker: int, pt: int, ssrc: int, payload: bytes):
        """Encode the RTP packet with header fields and payload."""
        timestamp = int(time())
        header = bytearray(HEADER_SIZE)
        #--------------
        # TO COMPLETE
        #--------------
        # Fill the header bytearray with RTP header fields

        header[
            0] = version << 6 & 0b11 << 6 | padding << 5 & 0b1 << 5 | extension << 4 & 0b1 << 4 | cc & 0b1
        header[1] = marker << 7 & 0b1 << 7 | pt & 0b1111111
        header[2:4] = seqnum.to_bytes(2, 'big')
        header[4:8] = timestamp.to_bytes(4, 'big')
        header[8:12] = ssrc.to_bytes(4, 'big')
        self.header = header

        # Get the payload from the argument
        self.payload = payload

    def decode(self, byteStream):
        """Decode the RTP packet."""
        self.header = bytearray(byteStream[:HEADER_SIZE])
        self.payload = byteStream[HEADER_SIZE:]

    def version(self):
        """Return RTP version."""
        return int(self.header[0] >> 6)

    def seqNum(self):
        """Return sequence (frame) number."""
        seqNum = self.header[2] << 8 | self.header[3]
        return int(seqNum)

    def timestamp(self):
        """Return timestamp."""
        timestamp = self.header[4] << 24 | self.header[5] << 16 | self.header[
            6] << 8 | self.header[7]
        return int(timestamp)

    def payloadType(self):
        """Return payload type."""
        pt = self.header[1] & 127
        return int(pt)

    def getPayload(self):
        """Return payload."""
        return self.payload

    def getPacket(self):
        """Return RTP packet."""
        return self.header + self.payload
