'''
Write a program which prompts the user for a temperature 
in Fahrenheit (this can be a number with decimal places!) and 
outputs the temperature converted to Celsius.
'''

def main():
    fahrenheit = float(input("Enter a temperature in Fahrenheit: "))
    print(f"User given temperature in Fahrenheit: {fahrenheit}F")
    celsius =(fahrenheit-32)*5/9
    print (f"Temperature in Celsius: {celsius}C")
main()