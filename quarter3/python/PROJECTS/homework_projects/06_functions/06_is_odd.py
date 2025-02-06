"""
Problem Statement
10 even 11 odd 12 even 13 odd 14 even 15 odd 16 even 17 odd 18 even 19 odd
"""

    
    
def main(value : list):
    lst2 =[]
    for x in value:
        if checkNum(x):
            lst2.append(f"{x}:Even")
            # print(x)
            # print('even')
        else :
            lst2.append(f"{x}:Odd")
            # print(x)
            # print('odd')
    print(lst2)
            
            

def checkNum(value : int):
    reminder = value % 2 == 0
    return reminder == 1
    

def promptUser():
    lst = []
    while True:
        userInput = (input("Enter a number: "))
        if userInput == "":
            break
        try: 
            intUserInput = int(userInput)
            lst.append(intUserInput)
        except ValueError:
           print("Enter a valid integer!")
    main(lst)
promptUser()


    