'''
Fill out the function which takes in a list lst as a 
parameter and prints the first element in
the list. The list is guaranteed to be non-empty. 
We've written some code for you which prompts the user to 
input the list one element at a time.
'''


# array : list =['abdullah',33,5.5,'polar']
# def getFirstElement(lst):
#     print(lst[3])
# getFirstElement(array)




def getFirstElement(lst):
    print(f"First element of the list is: {lst[0]}")
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


    