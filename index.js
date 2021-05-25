// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?', // change question
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?', // change question
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?', //change question
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?', //change question
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username', //change question
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.', //change question
        },
    ])
    
    // TODO: Create a function to write README file
    function writeToFile(fileName, data) { }

    .then((answers) => {
        const htmlPageContent = generateHTML(answers); //change HTML names 

        fs.writeFile('index.html', htmlPageContent, (err) => //change HTML names
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });


// TODO: Create a function to initialize app
function init() { }

//Not sure what this means yet

// Function call to initialize app
init();
