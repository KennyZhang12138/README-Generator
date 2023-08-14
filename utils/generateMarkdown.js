// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License 

    Copyright @ ${license}. All rights reserved.

    Licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title
${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents 

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Questions](#Questions)
    
## Installation

  \`\`\`
  ${data.dependencies}
  \`\`\`

## Usage
${data.usage}

## License 
${renderLicenseLink(data.license)}

## Contributors 
${data.contributors}

## Tests

  \`\`\`
  ${data.test}
  \`\`\`

## Questions

  For additional questions, contact me at the email provided below. 

  - GitHub: [${data.github}](https://github.com/${data.github}/)
  - Email:  ${data.email}
`;
}
module.exports = generateMarkdown;
