//this isnt needed but its required for my grade
//TODO write a class constructor for an intern
//then import that into prompts and use it to write html
const Employee = require('./employee') 
class Intern extends Employee{
    constructor(name, id, email, school){
    
        super(name, id, email)
        this.school = school
        
        
    }
    


}
const test = new Intern()

module.exports = test
module.exports = Intern