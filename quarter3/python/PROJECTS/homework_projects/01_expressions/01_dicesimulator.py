'''
Simulate rolling two dice, three times. 
Prints the results of each die roll. 
This program is used to show how variable scope works.
'''


import random

numberOfSides = int(6)

def diesSum() -> int :
    dies1 = random.randint(1, numberOfSides)
    dies2 = random.randint(1, numberOfSides)
    result = dies1 + dies2
    print(f"On Rolling Dies's {result}")


def rolling()-> int :
    diesSum()
    diesSum()
    diesSum()
rolling()