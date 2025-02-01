"""
Write a program which continuously asks the user
to enter values which are added one by one into a list.
When the user presses enter without typing anything, print the list.
Enter a value: 1 
Enter a value: 2 
Enter a value: 3 
Enter a value: 
Here's the list: ['1', '2', '3']
"""




def getList():
    lst = []
    userInput = input("Enter value to list or enter empty value to print list: ")
    while userInput != "":
        lst.append(userInput)
        userInput = input("Enter value to list or enter empty value to print list: ")
        if userInput == "":
            print(lst)
getList()




def getList1():
    lst1 = []
    userInput1 = input("Enter value to list or enter empty value to print list: ")
    while userInput1:
        lst1.append(userInput1)
        userInput1 = input("Enter value to list or enter empty value to print list: ")
    print(lst1)
getList()
