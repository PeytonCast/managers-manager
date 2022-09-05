const inquirer = require('inquirer');
//WHEN I start the application 
//THEN I am prompted to enter the team engineer’s name, CHECK employee ID, CHECK email address, office number
// use inquirer to write these prompts maybe put the prompts inside there own js file.

function engineerPrompts() {


    inquirer.prompt([
        {
          //engineer's name
          type: 'input',
          message: `please enter engineers team engineer name`,
          name: 'engineer-name'
        },
        {
            //employee ID 
            type: 'input',
            message: `please enter engineers employee ID`,
            name: 'engineer-emp-ID'
        },
        {
            //engineer email
            type: 'input',
            message: `please enter engineers email address`,
            name: 'engineer-email'
        },
        {
            //office number
            type: 'input',
            message: `please enter engineers office number`,
            name: 'engineer-office-num'
        },
      ])
      .then((data) => 
      {console.log(data)
        const menu = require("./menu")
        menu()

      })
}

module.exports = engineerPrompts;