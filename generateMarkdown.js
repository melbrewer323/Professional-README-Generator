// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ========================
  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  ========================

  ## Table of Contents 
  - [Description](#desc)\n
  - [Installation](#required)\n
  - [License](#License)\n
  - [Additional Info](#additional-info)\n

  ## Description:
  _________________________\n
  ${data.desc}\n
  \n
  ## Installation:
  _________________________\n
  ${data.required}\n
  \n
  ## License:
  _________________________\n
  ${data.license}\n
  \n
  ## Contact Info:
 ______________________________\n
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;