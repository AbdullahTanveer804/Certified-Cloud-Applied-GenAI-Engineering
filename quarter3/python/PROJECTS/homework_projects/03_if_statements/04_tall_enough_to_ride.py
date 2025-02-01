"""
Write a program which asks the user how tall they are 
and prints whether or not they're taller than a pre-specified 
minimum height.
"""


minHeight : float = 5.5

def main():
    height = float(input("How tall are you? "))
    if height >= minHeight:
        print("You're tall enough to ride!")
    else:
        print("You're not tall enough to ride, but maybe next year!")
main()