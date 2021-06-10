// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ['Enter title name of readme file? ( Required )', 
'Enter description of your project\'s title (Required) :',
'Write instruction to install your project ( Required ): ',
'Write instruction to use your project ( Required ): ',
'Which license you use to build this project? ',
'Please write about contribution guidelines on your project : ',
'Enter some tests : '
];

var licenseChoices = ["None",
    "Apache License 2.0",
    "GNU General Public License v3.0",
    "MIT License",
    "BSD 2-Clause \"Simplified\" License",
    "BSD 3-Clause \"New\" or \"Revised\" License",
    "Boost Software License 1.0",
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public License 2.0",
    "GNU Affero General Public License v3.0",
    "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1",
    "Mozilla Public License 2.0",
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
          name: 'title',
          message: questions[0],
          validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter valid title name!');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'description',
          message: questions[1],
          validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter valid description!');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'installation',
          message: questions[2],
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter valid installation instructions !');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter valid usage instructions!');
                return false;
              }
            }
          },
          {
            type: 'checkbox',
            name: 'license',
            message: questions[4],
            choices: licenseChoices
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6]
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
