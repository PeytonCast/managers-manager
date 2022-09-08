//this isnt needed but its required for my grade
//TODO write a class constructor for an employee
//then export for extending the othe constructors 

class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
}
// const manager = new Employee('Peyton', '2', 'email')
// console.log(manager)
const test = new Employee()

module.exports = test
module.exports = Employee