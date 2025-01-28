'''
Ask the user for two numbers, one at a time, 
and then print the result of dividing the first number 
by the second and also the remainder of the division.
'''


def main():
    dividend = int(input("Enter number to be dividend: "))
    divideBy = int(input("Enter number to divide by: "))
    result = dividend // divideBy
    remainder = dividend % divideBy
    print(f"Result of dividing the first number by the second is: {result}")
    print(f"Remainder of dividing the first number by the second is: {remainder}")
main()