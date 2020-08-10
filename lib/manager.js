const inquirer = require("inquirer");

const managerQuestions = [{
  type: "input",
  name: "managerName",
  message: "What is your manager's name?"
},
{
  type: "input",
  name: "managerID",
  message: "What is your manager's id number?"
},
{
  type: "input",
  name: "managerEmail",
  message: "What is your manager's email?"
},
{
  type: "input",
  name: "managerNumber",
  message: "What is your manager's office number?"
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
// make async and await then run other function
function ask() {
  return inquirer.prompt(managerQuestions)
}
function generate(answer) {
  return `
  <div class="col-md-4">
  <div class="card">
      <div class="card-header bg-primary mb-3 text-white">
          <h5 class="card-title"><strong>Manager</strong></h5>
          <h5 class="card-title">${answer.managerName}</h5>
      </div>
      <div class="card-body text-black">
          <ul class="list-group">
              <li class="list-group-item">ID: ${answer.managerID}</li>
              <li class="list-group-item">Email: <a href="mailto:${answer.managerEmail}">${answer.managerEmail}</a></li>
              <li class="list-group-item">Office Number: <a href="tel:${answer.managerNumber}">${answer.managerNumber}</a></li>
          </ul>
      </div>
  </div>
</div>
  ` ;
}

module.exports = {
  ask,
  generate,
}   