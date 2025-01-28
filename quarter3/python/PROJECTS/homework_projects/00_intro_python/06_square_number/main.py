'''
Ask the user for a number and print its 
square (the product of the number times itself).
'''


def main():
    userInput = int(input("Enter a number to see its square: "))
    square = int(userInput**2)
    print(f"Square of {userInput} is {square}")
main()