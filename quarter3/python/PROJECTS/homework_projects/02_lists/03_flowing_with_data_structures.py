'''
Fill out the function which takes a list and some data 
and then adds three copies of the data to the list. 
Don't return anything and see what happens! Compare 
this process to the x = change(x) example and note the differences.
Here is an example run of this program (user input in bold italics):
Enter a message to copy: Hello world!
List before: []
List after: ['Hello world!', 'Hello world!', 'Hello world!']
'''

# With while loop
userInput = input("Enter a message to copy: ")
outputArray : list = []
def main():
    i = 0
    while i < 3:
        outputArray.append(userInput)
        i+=1
    print(outputArray)
main()    


# With for loop
userInput = input("Enter a message to copy: ")
outputArray: list = []

def main1():
    for _ in range(3):
        outputArray.append(userInput)
    print(outputArray)

main1()