const inquirer = require('inquirer');
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
            //office number
            type: 'input',
            message: `please enter engineers Github username`,
            name: 'GitHub'
        },
      ])
      .then((data) => 
      {
        let line = (write) => fs.appendFileSync('index.html', `\n${write}`);

        //adds engineer inforamation
        line(`<div>`)
        line(`  <h2>engineer</h2>`)
        line(`  <h3>${data.engineerName}</h3>`)
        line(`  <p>employee ID: ${data.engineerID}</p>`)
        line(`  <a href="mailto:${data.engineerEmail}">${data.engineerEmail}</a>`)
        line(`  <p>GitHub: ${data.GitHub}</p>`)
        line(`</div>`)

        // line(``)


        const menu = require("./menu")
        
        menu()

      })
}

module.exports = engineerPrompts;