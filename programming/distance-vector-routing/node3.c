#include "rtpkt.h"
#include <stdio.h>

extern int TRACE;
extern int YES;
extern int NO;

extern float clocktime;

struct distance_table {
    int costs[4][4];
} dt3;

/* students to write the following two routines, and maybe some others */
void printdt3(struct distance_table *dtptr);

void rtinit3() {
    int adj[2][2] = {{0, 7}, {2, 2}};
    rtinit(4, dt3.costs, 3, adj, 2);
}

void rtupdate3(struct rtpkt *rcvdpkt) {
    rtupdate(4, dt3.costs, 3, rcvdpkt);
    printdt3(&dt3);
}

void printdt3(struct distance_table *dtptr) {
    printf("             via     \n");
    printf("   D3 |    0     2 \n");
    printf("  ----|-----------\n");
    printf("     0|  %3d   %3d\n", dtptr->costs[0][0], dtptr->costs[0][2]);
    printf("dest 1|  %3d   %3d\n", dtptr->costs[1][0], dtptr->costs[1][2]);
    printf("     2|  %3d   %3d\n", dtptr->costs[2][0], dtptr->costs[2][2]);
}
