//this isnt needed but its required for my grade
//TODO write a class constructor for an engineer
//then import that into prompts and use it to write html
const Employee = require('./employee')

class Engineer extends Employee{
    constructor(name, id, email, github){
    
        super(name, id, email)
        this.github = github
        
        
    }
    


}
const test = new Engineer()

module.exports = test
module.exports = Engineer