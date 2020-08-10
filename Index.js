const fs = require("fs");

const inquirer = require("inquirer");

const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const writeToFile = util.promisify(fs.appendFile)

// Connects other .js files to main app.js
const manager = require("./lib/manager")
const engineer = require("./lib/engineer")
const intern = require("./lib/intern")
const start = require("./lib/init")

// Empty arrays where employee data will be stored
var managers = []
var engineers = []
var interns = []

// Begins the function by running the init.js
async function init() {
    try {
        var answer = await manager.ask();
        data = manager.generate(answer)
        managers.push(data)


        // If addEmployee is true, it will continue to prompt questions until it is False
        if (answer.addEmployee === "Engineer" || answer.addEmployee === "Intern") {
            for (var i = 2; i > 1; i++) {
                if (answer.addEmployee === "Engineer") {
                    var answer = await engineer.eng();
                    data = engineer.generate(answer);
                    engineers.push(data);
                } else if (answer.addEmployee === "Intern") {
                    var answer = await intern.int();
                    data = intern.generate(answer);
                    interns.push(data);
                } else {
                    var employees = managers.concat(engineers, interns);
                    var team = employees.join(" ")

                    var teamList = await start.list(team);
                    console.log("Your professional team profile has been generated!")
                    await writeFileAsync("team.html", teamList);
                    return
                }
            }
        } else {
        // Only print manager information
        }

    // Catch any errors and console.log them
    } catch (err) {
        console.log(err);
    }
}

init();
