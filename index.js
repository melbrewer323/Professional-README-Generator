// TODO: Include packages needed for this application
//Use the following questions as a guide:
//What was your motivation?
//Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
//What problem does it solve?
//What did you learn?
//What makes your project stand out?
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'What is the description of the project?',
    },
    {
        type: 'input',
        name: 'required',
        message: 'What installations are required?',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What licenses will you need?',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
  },
  ];
  


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err)
    throw err;
    console.log("Readme file successfully created")
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
      writeToFile("README.md", generateMarkdown(userInput));
  });
};

// Function call to initialize app
init();


