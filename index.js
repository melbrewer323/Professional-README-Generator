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
      name: 'title',
      message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What needs to be installed?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What was used?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are you requirements for contributions?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are your code examples for project test?',
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
  





