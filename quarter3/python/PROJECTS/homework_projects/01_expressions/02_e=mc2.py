'''
Write a program that continually reads in mass from 
the user and then outputs the equivalent energy using 
Einstein's mass-energy equivalence formula (E stands for 
energy, m stands for mass, and C is the speed of light:

Use a constant value for the speed of light -- C = 299792458 m/s.
'''

speedOfLight = float(299792458)

def main():
    mass = float(input("Enter the kilo's of mass: "))
    print("Einstein's mass-energy equivalence formula: e = mc^2")
    print(f"Mass: {mass} kg")
    print(f"Speed Of Light: {speedOfLight} m/s")
    energy = (mass)*speedOfLight**2
    print(f"Energy = {energy} J")
main()