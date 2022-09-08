const inquirer = require('inquirer');
const Engineer = require('../classes/engineer')
const fs = require('fs')
function engineerPrompts() {


    inquirer.prompt([
        {
          //engineer's name
          type: 'input',
          message: `please enter engineer name`,
          name: 'engineerName'
        },
        {
            //employee ID 
            type: 'input',
            message: `please enter engineers employee ID`,
            name: 'engineerID'
        },
        {
            //engineer email
            type: 'input',
            message: `please enter engineers email address`,
            name: 'engineerEmail'
        },
        {
            //GitHub
            type: 'input',
            message: `please enter engineers Github username`,
            name: 'GitHub'
        },
      ])
      .then((data) => 
      { const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.GitHub)
        
        let line = (write) => fs.appendFileSync('index.html', `\n${write}`);

        //adds engineer inforamation
        line(`<div class="card">`)
        line(`  <header>Engineer</header>`)
        line(`  <h3>${engineer.name}</h3>`)
        line(`  <p>employee ID: ${engineer.name}</p>`)
        line(`  <a href="mailto:${engineer.email}">${engineer.email}</a> <br> <br>`)
        line(`  <a href="https://github.com/${engineer.github}">${engineer.github}</a>`)
        line(`</div>`)

        // line(``) 

        const menu = require("./menu")
        
        menu()

      })
}

module.exports = engineerPrompts;