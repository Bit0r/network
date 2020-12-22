#include "rtpkt.h"
#include <stdio.h>

extern int TRACE;
extern int YES;
extern int NO;

extern float clocktime;

int connectcosts1[4] = {1, 0, 1, 999};

struct distance_table {
    int costs[4][4];
} dt1;

/* students to write the following two routines, and maybe some others */

void rtinit1() {}

void rtupdate1(struct rtpkt *rcvdpkt) {}

void printdt1(struct distance_table *dtptr) {
    printf("             via   \n");
    printf("   D1 |    0     2 \n");
    printf("  ----|-----------\n");
    printf("     0|  %3d   %3d\n", dtptr->costs[0][0], dtptr->costs[0][2]);
    printf("dest 2|  %3d   %3d\n", dtptr->costs[2][0], dtptr->costs[2][2]);
    printf("     3|  %3d   %3d\n", dtptr->costs[3][0], dtptr->costs[3][2]);
}

/* called when cost from 1 to linkid changes from current value to newcost*/
/* You can leave this routine empty if you're an undergrad. If you want */
/* to use this routine, you'll need to change the value of the LINKCHANGE */
/* constant definition in prog3.c from 0 to 1 */
void linkhandler1(int linkid, int newcost) {}
