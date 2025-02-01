"""
Guess My Number

I am thinking of a number between 0 and 99... Enter a guess: 50 Your 
guess is too high
Enter a new number: 25 Your guess is too low
Enter a new number: 40 Your guess is too low
Enter a new number: 45 Your guess is too low
Enter a new number: 48 Congrats! The number was: 48
"""


# make some modifications in this code

import random

def main():
    randomNumber = random.randint(0 , 100)
    attemptsAllowed : int = 5
    userAttempt : int = 0
    while userAttempt < attemptsAllowed:
        print(f'You have {attemptsAllowed - userAttempt} attempts left')

        try:
            userInput = int(input('Enter a guess: '))
        except ValueError:
            print('Invalid input!\nGuess a numeric value.')
            continue
        userAttempt += 1

        if userInput <= 100 and userInput >= 0:
            if userInput == randomNumber :
                print('Congrats! The number was: ' , randomNumber)
                break
            if userInput > randomNumber:
                print('Too high')
            elif userInput < randomNumber:
                print('Too low')
        else :
            print('Invalid input!\nGuess numbers  from 0 - 100')
        if userAttempt == attemptsAllowed:
            print('Game Over!')

main()