
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
          name: 'manager-name'
        },
        {
            //employee ID 
            type: 'input',
            message: `please enter your employee ID`,
            name: 'manager-emp-ID'
        },
        {
            //manager email
            type: 'input',
            message: `please enter your email address`,
            name: 'manager-email'
        },
        {
            //office number
            type: 'input',
            message: `please enter your office number`,
            name: 'manager-office-num'
        },
      ])
      .then((data) => 
      {console.log(data)
        const menu = require("./menu")
        menu()

        
        //we might neeed this soon idk
      })
}

module.exports = managerPrompts;