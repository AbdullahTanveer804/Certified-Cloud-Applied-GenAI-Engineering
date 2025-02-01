"""
Print 10 random numbers in the range 1 to 100.

Here is an example run:
45 79 61 47 52 10 16 83 19 12
"""


import random
for x in range(10):
    print(random.randrange(1,100))



for x in range(10):
    print(random.randrange(1,100), end=" ") #for print values in horizontal line