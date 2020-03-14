$(document).ready(init);

const employees = [];

function init() {
  console.log("Ready");
  $(".js-submit-employee").on("submit", addEmployee);
  // add event listener for deleting individual employee
  $(".js-table-body").on("click", ".js-btn-delete", deleteEmployee);
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
  // add the employee data to employees array
  employees.push(employeeData);
  console.log(employees);
  render();
  // clear input fields
  $("input").val("");
}

function deleteEmployee() {
  const employeeIndex = $(this).data("index");
  console.log("DELETE:", employeeIndex);
  employees.splice(employeeIndex, 1);
  render();
  console.log(employees);
}

function render() {
  $(".js-table-body").empty();
  let totalMonthlyCosts = 0;
  for (let i = 0; i < employees.length; i++) {
    const individualEmployee = employees[i];
    // calculate the total monthly costs
    totalMonthlyCosts += individualEmployee.annualSalary / 12;
    // add individual employee data to DOM
    $(".js-table-body").append(`
      <tr>
      <td>${individualEmployee.firstName}</td>
      <td>${individualEmployee.lastName}</td>
      <td>${individualEmployee.employeeId}</td>
      <td>${individualEmployee.title}</td>
      <td>$${individualEmployee.annualSalary.toLocaleString()}</td>
      <td><button class="js-btn-delete" data-index="${i}">Delete</button></td>
      </tr>
      `);
  }
  // update total monthly costs in the DOM
  $(".js-total-monthly-costs").text(`${totalMonthlyCosts.toLocaleString()}`);
  // add red background color for total monthly costs exceeds $20k
  if (totalMonthlyCosts > 20000) {
    $(".js-red-background").css("background-color", "red");
  } else {
    $(".js-red-background").css("background-color", "white");
  }
}
