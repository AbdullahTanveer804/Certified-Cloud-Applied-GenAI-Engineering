#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";



// Title of Program
async function sleep() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000) // 2 seconds
    })
}

async function welcome( ) {
    const title = chalkAnimation.rainbow("Welcom to Number Guessing Game!")  // Animation Starting
    await sleep()
    title.stop() // Animation Stopping
}
await welcome()
 

// Main Function
// Random Number Generation
const randomNumber = Math.floor(Math.random() * 10 + 1)

// User Input
type answerType = {
    numberguessed : number
}
const answer : answerType = await inquirer.prompt([
    {
    name: "numberguessed",
    type: "number",
    message: chalk.bgWhite("Guess a number between 1 & 10 :")
    }
])

const {numberguessed} = answer // Destructuring the answer object

if (numberguessed === randomNumber) {
    console.log(chalk.green("Congratulaton You Guessed The Right Number!"))
} else {
    console.log(chalk.red("You Guessed The Wrong Number!"))
    console.log(chalk.yellow(`The Correct Number Was ${randomNumber}`))
    
}
