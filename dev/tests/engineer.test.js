const Engineer = require("../classes/engineer");

test("should return an object with keys of name, id, email", () => {

    const test = new Engineer("Peyton", 1, "Email", "PeytonCast")
   //I am wanting this test to return an object with the following values
   expect(test).toEqual({"email": "Email", "id": 1, "name": "Peyton", "github": "PeytonCast"})
})