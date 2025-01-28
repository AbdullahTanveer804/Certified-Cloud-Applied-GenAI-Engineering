print("Hello, World!")

# VARIABLES AND ITS RULES

# Variables are used to store data values.
# A variable is created the moment you first assign a value to it.
# Variables do not need to be declared with any particular type and can even change type after they have been set.

# VARIABLE CASES
# Camel Case: myVariableName
# Pascal Case: MyVariableName
# Snake Case: my_variable_name

# Rules for Python variables:
# A variable name must start with a letter or the underscore character
# A variable name cannot start with a number
# A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
# Variable names are case-sensitive (age, Age and AGE are three different variables)

# Example
x = 5
y = "John"
print(x)
print(y)

# Variable names are case-sensitive
a = 4
A = "Sally"
# A will not overwrite a
print(a)
print(A)

# Assign Value to Multiple Variables
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)

# Output Variables
x = "awesome"
print("Python is " + x)

# You can also use the + character to add a variable to another variable
x = "Python is "
y = "awesome"
z = x + y
print(z)

# For numbers, the + character works as a mathematical operator
x = 5
y = 10
print(x + y)

# If you try to combine a string and a number, Python will give you an error
# x = 5
# y = "John"
# print(complex(x + y))



# Variable Types
# Python has the following data types built-in by default, in these categories:

# Text Type:	str
# Numeric Types:	int, float, complex
# Sequence Types:	list, tuple, range
# Mapping Type:	dict
# Set Types:	set, frozenset
# Boolean Type:	bool
# Binary Types:	bytes, bytearray, memoryview

# Getting the Data Type
x = 5
print(type(x))

x = "Hello World"
print(type(x))

x = 20.5
print(type(x))

x = 1j
print(type(x))

x = ["apple", "banana", "cherry"]
print(type(x))

x = ("apple", "banana", "cherry")
print(type(x))

x = range(6)
print(type(x))

x = {"name" : "John", "age" : 36}
print(type(x))

x = {"apple", "banana", "cherry"}
print(type(x))

x = frozenset({"apple", "banana", "cherry"})
print(type(x))

x = True
print(type(x))

x = b"Hello"
print(type(x))

x = bytearray(5)
print(type(x))

x = memoryview(bytes(5))
print(type(x))

# Setting the Specific Data Type
x = str("Hello World")
print(type(x))

x = int(20)
print(type(x))

x = float(20.5)
print(type(x))

x = complex(1j)
print(type(x))

x = list(("apple", "banana", "cherry"))
print(type(x))

x = tuple(("apple", "banana", "cherry"))
print(type(x))

x = range(6)
print(type(x))

x = dict(name="John", age=36)
print(type(x))

x = set(("apple", "banana", "cherry"))
print(type(x))

x = frozenset(("apple", "banana", "cherry"))
print(type(x))

x = bool(5)
print(type(x))

x = bytes(5)
print(type(x))

x = bytearray(5)
print(type(x))

x = memoryview(bytes(5))
print(type(x))

# NUMBERS
# There are three numeric types in Python:
# int
# float
# complex

x = 1    # int
y = 2.8  # float
z = 1j   # complex

# To verify the type of any object in Python, use the type() function
print(type(x))
print(type(y))
print(type(z))


# String
# Strings in python are surrounded by either single quotation marks, or double quotation marks.
# 'hello' is the same as "hello".

a = "Hello, World!"
print(a)

# Multiline Strings
# You can assign a multiline string to a variable by using three quotes
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)

# Strings are Arrays
# Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.
# However, Python does not have a character data type, a single character is simply a string with a length of 1.
# Square brackets can be used to access elements of the string.
a = "Hello, World!"
print(a[1])

# Slicing
# You can return a range of characters by using the slice syntax.
b = "Hello, World!"
print(b[2:5])

# Negative Indexing
# Use negative indexes to start the slice from the end of the string
b = "Hello, World!"
print(b[-5:-2])

# String Length
# To get the length of a string, use the len() function.
a = "Hello, World!"
print(len(a))

# String Methods
# Python has a set of built-in methods that you can use on strings.
# The strip() method removes any whitespace from the beginning or the end
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!"

# The lower() method returns the string in lower case
a = "Hello, World!"
print(a.lower())

# The upper() method returns the string in upper case
a = "Hello, World!"
print(a.upper())

# The replace() method replaces a string with another string
a = "Hello, World!"
print(a.replace("H", "J"))

# The split() method splits the string into substrings if it finds instances of the separator
a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!']

# Check String
# To check if a certain phrase or character is present in a string, we can use the keywords in or not in.
txt = "The rain in Spain stays mainly in the plain"
x = "ain" in txt
print(x)

# String Concatenation
# To concatenate, or combine, two strings you can use the + operator.
a = "Hello"
b = "World"
c = a + b
print(c)

# String Format
# As we learned in the Python Variables chapter, we cannot combine strings and numbers like this:
# age = 36
# txt = "My name is John, I am " + age
# print(txt)
# But we can combine strings and numbers by using the format() method!
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))

# The format() method takes unlimited number of arguments, and are placed into the respective placeholders
quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars." 
print(myorder.format(quantity, itemno, price))

# You can use index numbers {0} to be sure the arguments are placed in the correct placeholders
quantity = 3
itemno = 567
price = 49.95
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))

# Escape Character
# To insert characters that are illegal in a string, use an escape character.

# An escape character is a backslash \ followed by the character you want to insert.
# An example of an illegal character is a double quote inside a string that is surrounded by double quotes
# You will get an error if you use double quotes inside a string that is surrounded by double quotes

# txt = "We are the so-called "Vikings" from the north."
# print(txt)

# To fix this problem, use the escape character \"
txt = "We are the so-called \"Vikings\" from the north."
print(txt)

# Other escape characters used in Python:
# \'	Single Quote
# \\	Backslash
# \n	New Line
# \r	Carriage Return
# \t	Tab
# \b	Backspace
# \f	Form Feed
# \ooo	Octal value
# \xhh	Hex value



# Operators
# Operators are used to perform operations on variables and values.

# Python divides the operators in the following groups:
# Arithmetic operators
# Assignment operators
# Comparison operators
# Logical operators
# Identity operators
# Membership operators
# Bitwise operators

# Arithmetic Operators
# Arithmetic operators are used with numeric values to perform common mathematical operations:
# Operator	Name	Example

# +	Addition	x + y
# -	Subtraction	x - y
# *	Multiplication	x * y
# /	Division	x / y
# %	Modulus	x % y
# **	Exponentiation	x ** y
# //	Floor
# Division	x // y

# Assignment Operators
# Assignment operators are used to assign values to variables:
# Operator	Example	Same As
# =	x = 5	x = 5
# +=	x += 3	x = x + 3   
# -=	x -= 3	x = x - 3
# *=	x *= 3	x = x * 3
# /=	x /= 3	x = x / 3
# %=	x %= 3	x = x % 3
# //=	x //= 3	x = x // 3
# **=	x **= 3	x = x ** 3
# &=	x &= 3	x = x & 3
# |=	x |= 3	x = x | 3
# ^=	x ^= 3	x = x ^ 3

# Comparison Operators
# Comparison operators are used to compare two values:
# Operator	Name	Example
# ==	Equal	x == y
# !=	Not equal	x != y
# >	Greater than	x > y
# <	Less than	x < y
# >=	Greater than or equal to	x >= y
# <=	Less than or equal to	x <= y

# Logical Operators
# Logical operators are used to combine conditional statements:
# Operator	Description	Example
# and 	Returns True if both statements are true	x < 5 and  x < 10
# or	Returns True if one of the statements is true	x < 5 or x < 4
# not	Reverse the result, returns False if the result is true	not(x < 5 and x < 10)

# Identity Operators
# Identity operators are used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location:
# Operator	Description	Example
# is 	Returns True if both variables are the same object	x is y
# is not	Returns True if both variables are not the same object

# Membership Operators
# Membership operators are used to test if a sequence is presented in an object:
# Operator	Description	Example
# in 	Returns True if a sequence with the specified value is present in the object	x in y
# not in	Returns True if a sequence with the specified value is not present in the

# Bitwise Operators
# Bitwise operators are used to compare (binary) numbers:
# Operator	Name	Description
# & 	AND	Sets each bit to 1 if both bits are 1
# |	OR	Sets each bit to 1 if one of two bits is 1
# ^	XOR	Sets each bit to 1 if only one of two bits is 1
# ~ 	NOT	Inverts all the bits
# <<	Zero fill left shift	Shift left by pushing zeros in from the right and let the leftmost bits fall off
# >>	Signed right shift	Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off

 
