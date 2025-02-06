"""
Write a function called print_ones_digit , which takes as a parameter an
integer num and prints its ones digit. The modulo (remainder) operator, %,
should be helpful to you here. Call your function from main()!

Here's a sample run (user input is in blue):
Enter a number: 42 The ones digit is 2
"""


def printOneDigit(number):
    lastDigit = number % 10
    print(lastDigit)

def main():
    userInput = input("Please enter a whole number: ")
    number = int(userInput)
    printOneDigit(number)

main()