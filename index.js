// TODO: Include packages needed for this application
const fs = require("fs");

const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the name of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:",
  },
  {
    type: "input",
    name: "dependencies",
    message: "Any dependencies to install?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the proper usage of this repo?",
  },
  {
    type: "list",
    name: "license",
    message: "What license does our project have?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GLP3.0", "BSD2", "BSD3", "None"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this repo?",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "github",
    message: "What's you GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What's your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, generateMarkdown(data), function (err) {
       if (err) {
         return console.log(err);
       }
     });
}

// TODO: Create a function to initialize app
function init() {
      inquirer.prompt(questions).then((data) => {
        console.log("Generated successfully");
        writeToFile("readmeExample.md", data);
      });
}

// Function call to initialize app
init();
