
// const menu = require("./menu")
const managerPrompts = require("./prompt")

managerPrompts()



// GIVEN a command-line application that accepts user input

// AFTER APPLICATION HAS RAN-----
//done
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// i will use inquirer to ask these propmts 
// and i will use the node generate file to write my html  

//done
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// i will need to figure out how to open email using an email link click

//TODO
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// this will be a link wher i can just github/${pass in a user name}.com

// START OF APPLICATION-----------
//done
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// use inquirer to write these prompts maybe put the prompts inside there own js file.

//done
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// this means i will need some type of promise statement so the menu will apear after i add manager information

//done
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// store this information in an object the return to the menu or replicate a menu 

//done
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

//done
// WHEN I decide to finish building my team
// this looks like another promise statement 

// THEN I exit the application, and the HTML is generated
// ```