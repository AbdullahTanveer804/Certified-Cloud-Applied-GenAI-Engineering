'''
Use Python to calculate the number of seconds in a year, 
and tell the user what the result is in a nice print 
statement that looks like this (of course the value 5 should be the calculated number instead):
There are 5 seconds in a year!
'''

daysPerYear = 365
hoursPerDay = 24
minPerHour = 60
secPerMin = 60

result = daysPerYear * hoursPerDay * minPerHour *secPerMin

def main():
    print(f"There are {result} seconds in a year.")
main()