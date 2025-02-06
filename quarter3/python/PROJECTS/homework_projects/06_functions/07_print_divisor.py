"""
Write the helper function print_divisors(num), which takes in a number
and prints all of its divisors (all the numbers from 1 to num inclusive
that num can be cleanly divided by (there is no remainder to the division). 
Don't forget to call your function in main()!

Here's a sample run (user input is in blue):
Enter a number: 12 Here are the divisors of 12 1 2 3 4 6 12
"""


def main(value : int):
    for x in range(1,value+1):
        if value % x == 0:
            print(x, end=" ")

def promptUser():
    num = int(input("Enter A Number: "))
    print(f"Here are the divisors of {num}:")
    main(num)
promptUser()