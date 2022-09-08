const Intern = require("../classes/intern");

test("should return an object with keys of name, id, email", () => {

    const test = new Intern("Peyton", 1, "Email", "Georgia Tech")
   //I am wanting this test to return an object with the following values
   expect(test).toEqual({"email": "Email", "id": 1, "name": "Peyton", "school": "Georgia Tech"})
})