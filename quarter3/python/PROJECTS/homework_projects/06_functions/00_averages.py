"""
Write a function that takes two numbers and finds the 
average between the two.
"""


num1 = int(input("Enter a number: "))
num2 = int(input("Enter a number: "))

def main(num1 : int , num2: int ):
    return (num1 + num2) // 2

print(main(num1,num2))