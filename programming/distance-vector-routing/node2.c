#include "rtpkt.h"
#include <stdio.h>

extern int TRACE;
extern int YES;
extern int NO;

extern float clocktime;

struct distance_table {
    int costs[4][4];
} dt2;

/* students to write the following two routines, and maybe some others */
void printdt2(struct distance_table *dtptr);

void rtinit2() {
    int adj[3][2] = {{0, 3}, {1, 1}, {3, 2}};
    rtinit(4, dt2.costs, 2, adj, 3);
}

void rtupdate2(struct rtpkt *rcvdpkt) {
    rtupdate(4, dt2.costs, 2, rcvdpkt);
    printdt2(&dt2);
}

void printdt2(struct distance_table *dtptr) {
    printf("                via     \n");
    printf("   D2 |    0     1    3 \n");
    printf("  ----|-----------------\n");
    printf("     0|  %3d   %3d   %3d\n", dtptr->costs[0][0], dtptr->costs[0][1],
           dtptr->costs[0][3]);
    printf("dest 1|  %3d   %3d   %3d\n", dtptr->costs[1][0], dtptr->costs[1][1],
           dtptr->costs[1][3]);
    printf("     3|  %3d   %3d   %3d\n", dtptr->costs[3][0], dtptr->costs[3][1],
           dtptr->costs[3][3]);
}
