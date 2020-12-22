/* a rtpkt is the packet sent from one routing update process to
   another via the call tolayer3() */

struct rtpkt {
    int sourceid;   /* id of sending router sending this pkt */
    int destid;     /* id of router to which pkt being sent
                       (must be an immediate neighbor) */
    int mincost[4]; /* min cost to node 0 ... 3 */
};
