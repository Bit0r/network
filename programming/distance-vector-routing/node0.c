#include "rtpkt.h"
#include <stdio.h>

extern int TRACE;
extern int YES;
extern int NO;

extern float clocktime;

struct distance_table {
    int costs[4][4];
} dt0;

/* students to write the following two routines, and maybe some others */
void linkhandler0(int linkid, int newcost);
void printdt0(struct distance_table *dtptr);

void rtinit0() {
    int adj[3][2] = {{1, 1}, {2, 3}, {3, 7}};
    rtinit(4, dt0.costs, 0, adj, 3);
}

void rtupdate0(struct rtpkt *rcvdpkt) {
    rtupdate(4, dt0.costs, 0, rcvdpkt);
    printdt0(&dt0);
}

void printdt0(struct distance_table *dtptr) {
    printf("                via     \n");
    printf("   D0 |    1     2    3 \n");
    printf("  ----|-----------------\n");
    printf("     1|  %3d   %3d   %3d\n", dtptr->costs[1][1], dtptr->costs[1][2],
           dtptr->costs[1][3]);
    printf("dest 2|  %3d   %3d   %3d\n", dtptr->costs[2][1], dtptr->costs[2][2],
           dtptr->costs[2][3]);
    printf("     3|  %3d   %3d   %3d\n", dtptr->costs[3][1], dtptr->costs[3][2],
           dtptr->costs[3][3]);
}

/* called when cost from 0 to linkid changes from current value to newcost*/
/* You can leave this routine empty if you're an undergrad. If you want */
/* to use this routine, you'll need to change the value of the LINKCHANGE */
/* constant definition in prog3.c from 0 to 1 */
void linkhandler0(int linkid, int newcost) {}
