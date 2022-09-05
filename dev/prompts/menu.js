//this is the menu prompts it will run after managerPrompt() runs
//TODO create a few functions that will run another set of prompts for the intern and engineer based off of menu prompts input
//then return to menu prompts repeat this until finished building is selected
const inquirer = require('inquirer');

function menu() {
inquirer.prompt([
    {
      //team managers name
      type: 'list',
      message: `Add people to build your team.`,
      name: 'menu',
      choices: [
         "engineer",
         "intern",
        "finished building",
      ]
    }
    
  ])
  .then((data) => 
  {
    console.log(data)
    if(data.menu == 'engineer'){
        console.log('run engineer')
        const engineer = require('./engineer')
        engineer()
          }
    if(data.menu == "intern") {
        console.log('run intern')
       //this will be a function

    }
    if(data.menu == "finished building"){
        console.log("run finished")
      //this will be a function

    }
    
  })
}
module.exports = menu;