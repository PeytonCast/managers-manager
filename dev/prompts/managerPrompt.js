const fs = require('fs')
const Manager = require('../classes/manager')

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
      ])//manager
      .then((data) => 
      //using classes to make an object even tho inquirer returns an object but its required in the readme 
      { const manager = new Manager(data.name, data.ID, data.email, data.office)
        
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
        line(`  <h3>${manager.name}</h3>`)
        line(`  <p>employee ID: ${manager.id}</p>`)
        line(`  <a href="mailto:${manager.email}">${manager.email}</a>`)
        line(`  <p>office number: ${manager.officeNumber}</p>`)
        line(`</div>`)

        

        const menu = require("./menu")
        menu()

        
       
      })
}

module.exports = managerPrompts;