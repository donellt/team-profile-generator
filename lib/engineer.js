inquirer = require("./node_modules/inquirer")

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "engineerID",
        message: "What is your engineer's id number?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?"
    },
    {
        type: "input",
        name: "engineerGit",
        message: "What is your engineer's GitHub username?"
    },
    {
        type: "list",
        name: "addEmployee",
        message: "Add another team member?",
        choices: [
            "Engineer",
            "Intern",
            "No more members"
        ]
    }
];

function eng() {
    return inquirer.prompt(engineerQuestions)
}
function generate(answer) {
    return `
    <div class="col-md-4">
    <div class="card">
        <div class="card-header bg-primary mb-3 text-white">
            <h5 class="card-title"><strong>Engineer</strong></h5>
            <h5 class="card-title">${answer.engineerName}</h5>
        </div>
        <div class="card-body text-black">
            <ul class="list-group">
                <li class="list-group-item">ID: ${answer.engineerID}</li>
                <li class="list-group-item">Email: <a href="mailto:${answer.engineerEmail}">${answer.engineerEmail}</a></li>
                <li class="list-group-item">GitHub: <a href="https://www.github.com/${answer.engineerGit}" target="_blank">${answer.engineerGit}</a></li>
            </ul>
        </div>
    </div>
</div>
    `;

}
module.exports = {
    eng,
    generate
}   