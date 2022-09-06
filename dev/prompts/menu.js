//this is the menu prompts it will run after managerPrompt() runs
//TODO create a few functions that will run another set of prompts for the intern and engineer based off of menu prompts input
//then return to menu prompts repeat this until finished building is selected
const inquirer = require('inquirer');
const fs = require('fs')
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
    
    if(data.menu == 'engineer'){
        const engineer = require('./engineer')
        engineer()
          }
    if(data.menu == "intern") {
        const intern = require('./intern')
        intern()
    }
    if(data.menu == "finished building"){
        console.log("finished")
        let line = (write) => fs.appendFileSync('index.html', `\n${write}`);

        //adds engineer inforamation
        line(`</body>`)
        line(`</html>`)
        process.exit(0)
        
    }
    
  })
}
module.exports = menu;