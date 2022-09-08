const Employee = require("../classes/employee");

test("should return an object with keys of name, id, email", () => {

    const test = new Employee("Peyton", 1, "Email")
   //I am wanting this test to return an object with the following values
   expect(test).toEqual({"email": "Email", "id": 1, "name": "Peyton"})
})