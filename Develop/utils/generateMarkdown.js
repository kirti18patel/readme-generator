// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseBadge = {None : "", 
    Apache : '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GNU : '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    MIT : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    BSD : '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    Eclipse : '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    Mozilla : '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    TheUnlicense : '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
}
function renderLicenseBadge(license) {
  // return licenseBadge.license;
  return licenseBadge[license];
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to display content for description section 
const description = description => {
  if (!description) {
    return '';
  }

  return `## Description 

  > ${description}
  `;
};

// function to display content for installation section 
const installation = installation => {
  if (!installation) {
    return '';
  }

  return `## Installation
  Install the dependencies and devDependencies.
  
  \`\`\`sh
  ${installation}
  \`\`\`
  `;
};

// function to display content for test section 
const test = test => {
  if (!test) {
    return '';
  }

  return `## Test
  \`\`\`sh
  ${test}
  \`\`\`
  `;
};

// function to display content for usage section 
const usage = usage => {
  if (!usage) {
    return '';
  }

  return `## Usage 
  ${usage}
  `;
};

// function to display content for contribution section 
const contribution = contribution => {
  if (!contribution) {
    return '';
  }

  return `  
  ## Contribution
  
  Want to contribute? Great!
  
  Make a change in your file and instantaneously see your updates!
  Open your favorite Terminal and run these commands.
  
  \`\`\`sh
  node index.js
  \`\`\`
  
  Also, ${contribution}.
  `;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown=(userInput) =>{
  console.log("markdown generated");
  return `# ${userInput.title}

  ${renderLicenseBadge(userInput.license)}

  ${description(userInput.description)}

  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Test](#Test)  
  * [Usage](#usage)
  * [Contribution](#contribution)

## License

${userInput.license}
${installation(userInput.installation)}
${test(userInput.test)}
${usage(userInput.usage)}
${contribution(userInput.contribution)}
#### Contact - **${userInput.email}**

${userInput.license} © [https://github.com/${userInput.github}](https://github.com/${userInput.github})
`;
}

module.exports = generateMarkdown;
