"""
Implement the following function which takes in 3 integers as parameters:

def in_range(n, low, high) Returns True if n is between low and high, 
inclusive. high is guaranteed to be greater than low.
"""


def inRange(n, low, high):
    if low < n and n< high:
        return True
    return False

def main():
    num = int(input("Enter a number: "))
    lowerbound = int(input("Enter a lowerbound: "))
    upperbound = int(input("Enter a upperbound:"))
    print(inRange(num,lowerbound,upperbound))
main()