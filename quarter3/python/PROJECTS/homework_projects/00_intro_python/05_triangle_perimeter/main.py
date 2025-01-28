'''
Prompt the user to enter the lengths of each side 
of a triangle and then calculate and print the 
perimeter of the triangle (the sum of all of the side lengths).
'''


def main():
    side1 = float(input("What is the length of side 1 of Triangle: "))
    side2 = float(input("What is the length of side 2 of Triangle: "))
    side3 = float(input("What is the length of side 3 of Triangle: "))
    
    perimeter = float(side1 + side2 + side3)
    
    print(f"The Perimeter of the triangle is {perimeter}")
main()    
