"""
Fill out the function count_even(lst) which first populates a list
by prompting the user for integers until they press enter
(please use the prompt "Enter an integer or press enter to stop: "),
and then prints the number of even numbers in the list.
"""


# lst = [1,2,3,4,5,6,7,8,9,]
# def listToBeFiltered(num):
#     return num % 2 == 0 
# lst1 = filter(listToBeFiltered , lst)
# evenList = list(lst1)
# print(evenList)

def countEven(lst):
    filterLst = list(filter(lambda x : x % 2 == 0 , lst))
    print(f"List of even numbers: {filterLst}")
    return len(filterLst)

def getPrompt():
    lst = []
    while True:
        userInput = input("Enter an integer or press enter to stop: ")
        if userInput == "":
            break
        try:
            num = int(userInput)
            lst.append(num)
        except ValueError:
            print("Please enter a valid integer")
    evenCount = countEven(lst)   
    print(f"Number of even numbers in the list: {evenCount}")
    
getPrompt()

