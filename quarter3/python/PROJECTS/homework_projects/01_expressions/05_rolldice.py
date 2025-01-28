'''
Simulate rolling two dice, and prints results of each roll as well as the total.
'''


import random

numberOfSides = int(6)

def diesSum() -> int :
    dies1 = random.randint(1, numberOfSides)
    dies2 = random.randint(1, numberOfSides)
    result = dies1 + dies2
    print(f"Number of sides in a dies: {numberOfSides}")
    print(f"First dies: {dies1}")
    print(f"First dies: {dies2}")
    print(f"On Rolling Dies's {result}")
diesSum()
