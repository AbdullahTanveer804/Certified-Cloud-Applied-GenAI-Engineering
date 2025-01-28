'''
Converts feet to inches. Feet is an American unit of measurement.
There are 12 inches per foot. Foot is the singular, and feet is the plural.
'''

inchesPerFoot = 12


def main():
    feet = int(input("Enter feet to convert into inches: "))
    convert = feet * inchesPerFoot
    print(f"Inches In {feet} are {convert}")
main()
