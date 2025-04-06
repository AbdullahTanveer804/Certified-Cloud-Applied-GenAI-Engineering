#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

// Title of Program
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000) // 2 seconds
    })
}

async function welcome() {
    const title = chalkAnimation.rainbow('Welcome to Calculator App!')  // Animation Strating
    await sleep()
    title.stop() // Animation Stopping
}
await welcome()


// Main Function
async function getStarted() {
    await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.blue("Which operation do you want to perform?"),
            choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
            ]
        },
        {
            name: "num1",
            type: "number",
            message: chalk.bgWhite("Enter first number:")        
        },
        {
            name: "num2",
            type: "number",
            message: chalk.bgWhite("Enter second number:")        
        },
    ])
    // Calculations
    .then((answer) => {
        if (answer.operation === "Addition"){
            console.log(chalk.green(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
        }
        else if (answer.operation === "Subtraction"){
            console.log(chalk.green(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`))
        }
        else if (answer.operation === "Multiplication"){
            console.log(chalk.green(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`))
        }
        else if (answer.operation === "Division"){
            console.log(chalk.green(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`))
        }
        else {
            console.log(chalk.red("Invalid operation!"))
        }
        console.log(chalk.yellow("Thank you for using the calculator app!"))
    })
}



// Restart the program
async function startAgain() {
    let restart: boolean;
    do {
        await getStarted();
        const again = await inquirer.prompt(
            {
                name: "restart",
                type: "confirm",
                message: chalk.italic.bold("Do you want to perform another calculation?"),
            }
        );
        restart = again.restart;
    } while (restart);
}
startAgain()