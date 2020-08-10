inquirer = require("./node_modules/inquirer");

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is your intern's name?"
  },
  {
    type: "input",
    name: "internID",
    message: "What is your intern's id number?"
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is your intern's email?"
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is your intern's school?"
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

function int() {
  return inquirer.prompt(internQuestions)
}
function generate(answer) {
  return `
  <div class="col-md-4">
  <div class="card">
      <div class="card-header bg-primary mb-3 text-white">
          <h5 class="card-title"><strong>Intern</strong></h5>
          <h5 class="card-title">${answer.internName}</h5>
      </div>
      <div class="card-body text-black">
          <ul class="list-group">
              <li class="list-group-item">ID: ${answer.internID}</li>
              <li class="list-group-item">Email: <a href="mailto:${answer.internEmail}">${answer.internEmail}</a></li>
              <li class="list-group-item">School: ${answer.internSchool}</li>
          </ul>
      </div>
  </div>
</div>
      `;

}

module.exports = {
  int,
  generate,
  Manager
}   