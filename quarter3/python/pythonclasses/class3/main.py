# Lists

# List is a collection of items in a particular order
# List is mutable
# List is defined by square brackets []
# List can have different data types
# List can have duplicate items
# List can have nested lists

# List methods
# append() - Adds an element to the end of the list
# insert() - Adds an element at a specified position
# remove() - Removes the first occurrence of an element
# pop() - Removes the element at a specified position
# clear() - Removes all the elements from the list
# index() - Returns the index of the first occurrence of an element
# count() - Returns the number of occurrences of an element
# sort() - Sorts the elements in ascending order
# reverse() - Reverses the order of the elements
# copy() - Returns a copy of the list
# extend() - Adds the elements of another list to the end of the list
# copy() - Returns a copy of the list

# Creating a list
# Empty list
my_list = []
print(my_list)

# List with items
my_list = [1, 2, 3, 4, 5]
print(my_list)

# List with different data types
my_list = [1, 'hello', 3.14, True]
print(my_list)

# List with duplicate items
my_list = [1, 1, 1, 1]
print(my_list)

# List with nested lists
my_list = [1, [2, 3], 4]
print(my_list)

# Accessing elements in a list
# Accessing elements using index
my_list = [1, 2, 3, 4, 5]
print(my_list[0])

# Accessing elements using negative index
print(my_list[-1])

# Accessing elements using slicing
print(my_list[1:4])

# Accessing elements using negative slicing
print(my_list[-3:-1])

# Modifying elements in a list
# Modifying elements using index
my_list = [1, 2, 3, 4, 5]
my_list[0] = 10
print(my_list)

# Modifying elements using slicing
my_list[1:4] = [20, 30, 40]
print(my_list)

# Adding elements to a list
# Adding elements using append() method
my_list = [1, 2, 3, 4, 5]
my_list.append(6)
print(my_list)

# Adding elements using insert() method
my_list.insert(1, 10)
print(my_list)

# Removing elements from a list
# Removing elements using remove() method
my_list = [1, 2, 3, 4, 5]
my_list.remove(3)
print(my_list)

# Removing elements using pop() method
my_list.pop()
print(my_list)

# Removing elements using del keyword
del my_list[0]
print(my_list)

# Removing elements using clear() method
my_list.clear()
print(my_list)

# Finding the length of a list
my_list = [1, 2, 3, 4, 5]
print(len(my_list))

# Looping through a list
my_list = [1, 2, 3, 4, 5]
for item in my_list:
    print(item)
    
# List comprehension
my_list = [1, 2, 3, 4, 5]
new_list = [item * 2 for item in my_list]
print(new_list)


  