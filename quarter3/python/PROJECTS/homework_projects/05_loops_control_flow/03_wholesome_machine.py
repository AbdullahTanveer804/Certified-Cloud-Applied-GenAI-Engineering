"""
Write a program which prompts the user to type an affirmation of your
choice (we'll use "I am capable of doing anything I put my mind to.") 
until they type it correctly. Sometimes, especially in the midst of 
such uncertain times, we just need to be reminded that we are resilient,
capable, and strong; this little Python program may be able to help!
"""


affirmation = "Hi! My Name Is Muhammad Abdullah Tanveer."
def main():
    print(f"Print the following affirmation: {affirmation}")
    userInput = input()
    while userInput != affirmation:
        print(f"Print the following affirmation: {affirmation}")
        userInput = input()
    print("That's right! :)")    
main()