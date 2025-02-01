"""
Fill out the function get_last_element(lst) which takes in a
list lst as a parameter and prints the last element in the list.
The list is guaranteed to be non-empty, but there are 
no guarantees on its length.
"""

def getFirstElement(lst):
    print(f"First element of the list is: {lst[-1]}")
    print(lst)
    
def getList():
    lst = []
    userInput = input("Enter element to add to the list or enter empty value to stop: ")
    while userInput != "":
        lst.append(userInput)
        userInput = input("Enter element to add to the list or enter empty value to stop: ")
    return lst

def main():
    lst = getList()
    getFirstElement(lst)
main()


    