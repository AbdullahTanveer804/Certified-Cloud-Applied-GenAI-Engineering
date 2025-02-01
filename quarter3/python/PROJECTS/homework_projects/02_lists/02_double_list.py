'''
Write a program that doubles each element in a list of numbers. 
For example, if you start with this list:
numbers = [1, 2, 3, 4]
You should end with this list:
numbers = [2, 4, 6, 8]
'''


# With while loop
newArray : list[int]=[]
def main():
    i = 0
    array : list[int] =[1,2,3,4]
    print(array)
    while i < len(array):
        double = 2 * array[i]
        newArray.append(double)
        i += 1
    print(newArray)
main()        


# With for loop
newArray : list[int]=[]
def main1():
    array : list[int] =[1,2,3,4]
    print(array)
    for x in array:
        double = 2 * x
        newArray.append(double)
    print(newArray)
main1()        
    
    