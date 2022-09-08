const inquirer = require('inquirer');
const Intern = require('../classes/intern')
const fs = require('fs')
function internsPrompts() {


    inquirer.prompt([
        {
          //interns's name
          type: 'input',
          message: `please enter interns name`,
          name: 'internsName'
        },
        {
            //employee ID 
            type: 'input',
            message: `please enter interns employee ID`,
            name: 'internsID'
        },
        {
            //interns email
            type: 'input',
            message: `please enter interns email address`,
            name: 'internsEmail'
        },
        {
            //office number
            type: 'input',
            message: `please enter interns school`,
            name: 'School'
        },
      ])
      .then((data) => 
      { const intern = new Intern(data.internsName, data.internsID, data.internsEmail, data.School)
        
        let line = (write) => fs.appendFileSync('index.html', `\n${write}`);

        //adds engineer inforamation
        line(`<div class="card">`)
        line(`  <header>Intern</header>`)
        line(`  <h3>${intern.name}</h3>`)
        line(`  <p>employee ID: ${intern.id}</p>`)
        line(`  <a href="mailto:${intern.email}">${intern.email}</a>`)
        line(`  <p>school: ${intern.school}</p>`)
        line(`</div>`)

        // line(``)

        const menu = require("./menu")
        menu()

      })
}

module.exports = internsPrompts;