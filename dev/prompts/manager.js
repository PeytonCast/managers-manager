const fs = require('fs')
const inquirer = require('inquirer');
//WHEN I start the application 
//THEN I am prompted to enter the team manager’s name, CHECK employee ID, CHECK email address, office number
// use inquirer to write these prompts maybe put the prompts inside there own js file.

function managerPrompts() {


    inquirer.prompt([
        {
          //team managers name
          type: 'input',
          message: `please enter your team manager name`,
          name: 'name'
        },
        {
            //employee ID 
            type: 'input',
            message: `please enter your employee ID`,
            name: 'ID'
        },
        {
            //manager email
            type: 'input',
            message: `please enter your email address`,
            name: 'email'
        },
        {
            //office number
            type: 'input',
            message: `please enter your office number`,
            name: 'office'
        },
      ])
      .then((data) => 
      {
        //this is writing the html file
        //boiler plate
        let line = (write) => fs.appendFileSync('index.html', `\n${write}`);

        line(`<!DOCTYPE html>`)
        line(`<html lang="en">`)
        line(`<head>`)
        line( `   <meta charset="UTF-8">`)
        line( `   <meta http-equiv="X-UA-Compatible" content="IE=edge">`)
        line( `   <meta name="viewport" content="width=device-width, initial-scale=1.0">`)// 
        line( `   <link rel="stylesheet" href="style.css">`)
        line( `   <title>Manager</title>`)
        line(`</head>`) 
        
        line(`<body class="box">`)
        //adds manager inforamation
        line(`<div class="card">`)
        line(`  <header>Manager</header>`)
        line(`  <h3>${data.name}</h3>`)
        line(`  <p>employee ID: ${data.ID}</p>`)
        line(`  <a href="mailto:${data.email}">${data.email}</a>`)
        line(`  <p>office number: ${data.office}</p>`)
        line(`</div>`)

        

        const menu = require("./menu")
        menu()

        
       
      })
}

module.exports = managerPrompts;