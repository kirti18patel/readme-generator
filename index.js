// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ['What is your Github Username? ', 
'What is your Email address? ',
'What is your project\'s name? ',
'Please write a short description of your project? ',
'What kind of license should your project have? ',
'What comand should be run to install depenencies? ',
'What command should be run to run tests? ',
'What does the user need to know about using the repo? ',
'What does the user need to know about contributing to repo? '
];

var licenseChoices = ["None",
    "Apache",
    "GNU",
    "MIT",
    "BSD",
    "Eclipse",
    "Mozilla",
    "The Unlicense"
]
// TODO: Create a function to write README file
var writeToFile = (fileName, data) => {
    return new Promise((resolve, reject)=>{
    fs.writeFile(fileName, data , err => {
        if (err){
          reject (err);
        return;
        }
        resolve({
            ok: true,
            message: 'File created!'
        })
        console.log("Readme.md file created succesfully");
    });
});
}

// TODO: Create a function to initialize app
var init =() => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'github',
          message: questions[0],
          validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter valid github username!');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'email',
          message: questions[1],
          validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter valid email!');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'title',
          message: questions[2],
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter valid projects\'s name!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: licenseChoices
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[5],
            default: "npm i"
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6],
            default: "npm test"
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[8]
        },
      ]);
    };

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(data =>{
    console.log(data);
    writeToFile("./dist/README.md", data);
})
.catch(err => {
    console.log(err);
});
