// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("markdown generated");
  return `# ${data.title}

  ## Description 
  > ${data.description}

  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Test](#Test)  
  * [Usage](#usage)
  * [Contribution](#Contribution)
  * [Contact](#contact)

## License

${data.license}

## Installation
Install the dependencies and devDependencies.

\`\`\`sh
${data.installation}
\`\`\`


## Test
\`\`\`sh
${data.test}
\`\`\`

## Usage 
${data.usage}

## Contribution

Want to contribute? Great!

Make a change in your file and instantaneously see your updates!
Open your favorite Terminal and run these commands.

\`\`\`sh
node index.js
\`\`\`

Also, ${data.contribution}.

#### Contact - **${data.email}**

${data.license} © [https://github.com/${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
