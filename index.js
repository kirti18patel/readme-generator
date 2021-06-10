// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
var init =() => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Enter title name of readme file? ( Required )',
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
          message: 'Enter description of your project\'s title (Required) :',
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
          message: 'Write instruction to install your project ( Required ): ',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter valid installation instructions!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Write instruction to use your project ( Required ): ',
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
            type: 'input',
            name: 'contribution',
            message: 'Please write about contribution guidelines on your project : '
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter some tests : '
        },
      ]);
    };

// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// Function call to initialize app
init()
.then(userInput => {
    console.log(userInput);
})
.catch(err => {
    console.log(err);
});
