"""
Write a program which asks a user for their age and lets them know if 
they can or can't vote in the following three fictional countries.
Around the world, different countries have different voting ages. 
In the fictional countries of Peturksbouipo, Stanlau, and Mayengua,
the voting ages are very different:
the voting age in Peturksbouipo is 16 
the voting age in Stanlau is 25 
the voting age in Mayengua is 48 
Your code should prompt the for their age and print whether or
not they can vote in Peturksbouipo, Stanlau, or Mayengua.
"""



def main():
    userInput = int(input("Enter your age: "))
    if userInput < 25:
        print("You can vote in Peturksbouipo where the voting age is 16.")
    elif userInput < 48:
        print("You can vote in Peturksbouipo where the voting age is 16.\nYou can also vote in Stanlau where the voting age is 25.")
    else :
        print("You can vote in Peturksbouipo where the voting age is 16.\nYou can also vote in Stanlau where the voting age is 25.\nYou can also vote in Mayengua where the voting age is 48.")
main()