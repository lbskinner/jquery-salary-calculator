$(document).ready(init);

const employees = [];

function init() {
  console.log("Ready");
  $(".js-submit-employee").on("submit", addEmployee);
}

function addEmployee(event) {
  event.preventDefault();
  const employeeData = {
    firstName: $(".js-input-first-name").val(),
    lastName: $(".js-input-last-name").val(),
    employeeId: $(".js-input-id").val(),
    title: $(".js-input-title").val(),
    annualSalary: parseInt($(".js-input-annual-salary").val())
  };
  employees.push(employeeData);
  console.log(employees);
}
