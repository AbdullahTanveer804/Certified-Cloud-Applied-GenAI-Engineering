'''
Write a program to solve this age-related riddle!
Anton, Beth, Chen, Drew, and Ethan are all friends. Their ages are as follows:

Anton is 21 years old.
Beth is 6 years older than Anton.
Chen is 20 years older than Beth.
Drew is as old as Chen's age plus Anton's age.
Ethan is the same age as Chen.

Your code should store each person's age to a variable and print their names and ages at the end.
'''


def main() -> int :
    anton = int(21)
    beth = anton + int(6)
    chen = beth + int(20)
    drew = chen + anton 
    ethan = chen
    print(f"Anton is {anton}.")
    print(f"Beth is {beth}.")
    print(f"Chen is {chen}.")
    print(f"Drew is {drew}.")
    print(f"Ethan is {ethan}.")
main()