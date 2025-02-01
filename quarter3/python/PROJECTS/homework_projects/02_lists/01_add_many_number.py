'''
Write a function that takes a list of numbers and returns the sum of those numbers.
'''


'''
print sum after each iteration because i print the sum inside loop...
'''

# def main():
#     sum = 0
#     array : list = [0,1,2,3,4,5,6,7,8,9]
#     i = 0
#     while i < 10:
#         sum += array[i]
#         i += 1 
#         print(sum)
# main()



'''
with for loop
'''
def main():
    sum = 0
    array : list[int] = [0,1,2,3,4,5,6,7,8,9]
    for x in array:
        sum += x
    print(sum)
main()


'''
with while loop
'''
def main1():
    sum = 0
    array: list[int] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    i = 0
    while i < len(array):
        sum += array[i]
        i += 1
    print(sum)
main1()