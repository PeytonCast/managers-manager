//this isnt needed but its required for my grade
//TODO write a class constructor for an manager
//then import that into prompts and use it to write html
const Employee = require('./employee') 
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
    
        super(name, id, email)
        this.officeNumber = officeNumber
        
        
    }
    


}
const test = new Manager()
console.log(test)
module.exports = test
module.exports = Manager