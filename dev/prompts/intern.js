const inquirer = require('inquirer');
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
      {
        let line = (write) => fs.appendFileSync('index.html', `\n${write}`);

        //adds engineer inforamation
        line(`<div class="card">`)
        line(`  <header>Intern</header>`)
        line(`  <h3>${data.internsName}</h3>`)
        line(`  <p>employee ID: ${data.internsID}</p>`)
        line(`  <a href="mailto:${data.internsEmail}">${data.internsEmail}</a>`)
        line(`  <p>school: ${data.School}</p>`)
        line(`</div>`)

        // line(``)

        const menu = require("./menu")
        menu()

      })
}

module.exports = internsPrompts;