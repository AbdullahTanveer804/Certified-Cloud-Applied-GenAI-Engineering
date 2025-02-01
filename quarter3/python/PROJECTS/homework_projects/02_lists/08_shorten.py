"""
Fill out the function shorten(lst) which removes elements from the end of lst,
which is a list, and prints each item it removes until lst is MAX_LENGTH 
items long. If lst is already shorter than MAX_LENGTH you should leave it 
unchanged. We've written a main() function for you which gets a list and 
passes it into your function once you run the program. For the autograder
to pass you will need MAX_LENGTH to be 3, but feel free to change it around to test your program.
"""

maxLength = 3
def shorten(lst):
    while len(lst) > maxLength:
        itemToBeRemoved = lst.pop()    
        print(itemToBeRemoved)
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
    shorten(lst)
main()