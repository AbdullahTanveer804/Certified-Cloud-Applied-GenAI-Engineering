"""
Fill out the subtract_seven helper function to subtract 7 from num, and fill
out the main() method to call the subtract_seven helper function! 
"""

def main():
    num: int = 7
    num = subtractSeven(num)
    print("this should be zero: ", num)

def subtractSeven(num):
    num = num - 7
    return num

main()
