const Manager = require("../classes/manager");

test("should return an object with keys of name, id, email", () => {

    const test = new Manager("Peyton", 1, "Email", "123456789")
   //I am wanting this test to return an object with the following values
   expect(test).toEqual({"email": "Email", "id": 1, "name": "Peyton", "officeNumber": "123456789"})
})