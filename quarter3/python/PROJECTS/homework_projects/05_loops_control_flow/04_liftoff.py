"""
Write a program that prints out the calls for a spaceship that is about 
to launch. Countdown from 10 to 1 and then output Liftoff!

Here's a sample run of the program:
10 9 8 7 6 5 4 3 2 1 Liftoff!
"""


def main():
    for x in range(10,0,-1):
        print(x,end=" ")
    print("Lift Off!")
main()

def main1():
    i = 10
    while i > 0:
        print(i,end=" ")
        i-=1
    print("Lift Off!")
main1()
        