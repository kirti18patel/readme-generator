// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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

  ${description(userInput.description)}

  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Test](#Test)  
  * [Usage](#usage)
  * [Contribution](#Contribution)
  * [Contact](#contact)

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
