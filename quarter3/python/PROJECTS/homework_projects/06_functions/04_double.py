"""
Fill out the double(num) function to return the result of multiplying 
num by 2. We've written a main() function for you which asks the user 
for a number, calls your code for double(num) , and prints the result.
"""
def double(userInput : int):
    return userInput * 2
def main():
    userInput = int(input("Enter A number: "))
    doubleNumber =  double(userInput)
    print(doubleNumber)
main()