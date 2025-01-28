# Functions & Types

# Functions
# Function is a block of code that only runs when it is called
# You can pass data, known as parameters, into a function
# A function can return data as a result

# Function definition
def add(a, b):
    return a + b

# Function call without arguments
# print(add())

# Function call with arguments
print(add(1, 2))

# Function call with arguments and return value
result = add(1, 2)
print(result)


# Input function
# The input() function allows user input
# The input() function returns a string
# Input is always a string, so you need to convert it to a number
# You can convert the string to an integer using int()

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
def subtract(x, y):
    return x - y
result = subtract(num1, num2)
print(result)


# If statement 
# The if statement is used to execute a block of code only if the condition is true
# The if statement is written by using the if keyword
# Indentation is used to separate the blocks of code
# The elif keyword is pythons way of saying "if the previous conditions were not true, then try this condition"
# The else keyword catches anything which isn't caught by the preceding conditions

# If statement example
a = 33
b = 200
if b > a:
    print("b is greater than a")
    
# Elif example
a = 33
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
    
# Else example
a = 200
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")
    
# Short hand if
a = 200
b = 33
if a > b: print("a is greater than b")

# Short hand if else
a = 2
b = 330
print("A") if a > b else print("B")

# Multiple conditions
a = 200
b = 33
c = 500
if a > b and c > a:
    print("Both conditions are True")
    
# Nested if
x = 41
if x > 10:
    print("Above ten,")
    if x > 20:
        print("and also above 20!")
    else:
        print("but not above 20.")
        
        
# Write a program to check if a number is positive, negative or zero
num = int(input("Enter a number: "))
def check_number(num):
    if num > 0:
        return "Positive"
    elif num < 0:
        return "Negative"
    else:
        return "Zero"
print(check_number(num)) 
    

# Write a program to check if a number is even or odd
num = int(input("Enter a number:"))
def checkNumber(num):
    if num % 2 == 0:
        return "Even"
    else:    
        return "Odd"
print(checkNumber(num))


# While loop
# The while loop is used to execute a block of code multiple times
# As long as a condition is true
# The while loop is written by using the while keyword
# Indentation is used to separate the blocks of code
# The break keyword is used to stop the loop even if the while condition is true
# The continue keyword is used to return to the beginning of the loop

# While loop example
i = 1
while i < 6:
    print(i)
    i += 1
    
# Break example
i = 1
while i < 6:
    print(i)
    if i == 3:
        break
    i += 1
    
# Continue example
i = 0
while i < 6:
    i += 1
    if i == 3:
        continue
    print(i)
    
# Else in while loop
i = 1
while i < 6:
    print(i)
    i += 1
else:
    print("i is no longer less than 6")
    
# For loop
# The for loop is used to iterate over a sequence (list, tuple, dictionary, set, string)
# The for loop is written by using the for keyword
# Indentation is used to separate the blocks of code
# The break keyword is used to stop the loop before it has looped through all the items
# The continue keyword is used to return to the beginning of the loop

# For loop example
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)

# Break example
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)
    if x == "banana":
        break
    
# Continue example
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        continue
    print(x)
    
# Range function
# To loop through a set of code a specified number of times, we can use the range() function
# The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default)

# Range function example
for x in range(6):
    print(x)
    
# Range function with start parameter
for x in range(2, 6):
    print(x)
    
# Range function with increment parameter
for x in range(2, 30, 3):
    print(x)
    
# Else in for loop
for x in range(6):
    print(x)
else:
    print("Finally finished!")
    
# Nested loops
# A nested loop is a loop inside a loop
# The "inner loop" will be executed
# One time for each iteration of the "outer loop"

# Nested loop example
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]
for x in adj:
    for y in fruits:
        print(x, y)
        
# Pass statement
# The pass statement is used as a placeholder for future code
# When the pass statement is executed, nothing happens, but you avoid getting an error when empty code is not allowed

# Pass statement example
for x in [0, 1, 2]:
    pass


# Match statement

# The match statement is a new feature in Python 3.10
# The match statement is similar to the switch statement in other programming languages
# The match statement is used to compare the value of an expression to a set of constants
# The match statement is written by using the match keyword
# The case keyword is used to specify a constant value
# The break keyword is used to stop the execution of the match statement

# Match statement example
def match_example(x):
    match x:
        case 1:
            print("one")
        case 2:
            print("two")
        case _:
            print("other")
print(match_example(3))
