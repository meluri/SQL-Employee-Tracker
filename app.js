const inquirer = require('inquirer');
const { 
  viewDepartments, 
  viewRoles, 
  viewEmployees, 
  addDepartment, 
  addRole, 
  addEmployee, 
  updateEmployeeRole 
} = require('./db/queries');

const mainMenu = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ]).then(answer => {
    switch (answer.action) {
      case 'View all departments':
        viewDepartments().then(res => {
          console.table(res.rows);
          mainMenu();
        });
        break;

      case 'View all roles':
        viewRoles().then(res => {
          console.table(res.rows);
          mainMenu();
        });
        break;

      case 'View all employees':
        viewEmployees().then(res => {
          console.table(res.rows);
          mainMenu();
        });
        break;

      case 'Add a department':
        inquirer.prompt({
          type: 'input',
          name: 'name',
          message: 'Enter the new department name:'
        }).then(res => {
          addDepartment(res.name).then(() => {
            console.log('Department added successfully!');
            mainMenu();
          });
        });
        break;

      case 'Add a role':
        inquirer.prompt([
          { type: 'input', name: 'title', message: 'Enter the role title:' },
          { type: 'input', name: 'salary', message: 'Enter the role salary:' },
          { type: 'input', name: 'department_id', message: 'Enter the department ID:' }
        ]).then(res => {
          addRole(res.title, res.salary, res.department_id).then(() => {
            console.log('Role added successfully!');
            mainMenu();
          });
        });
        break;

      case 'Add an employee':
        inquirer.prompt([
          { type: 'input', name: 'first_name', message: 'Enter employee first name:' },
          { type: 'input', name: 'last_name', message: 'Enter employee last name:' },
          { type: 'input', name: 'role_id', message: 'Enter role ID:' },
          { type: 'input', name: 'manager_id', message: 'Enter manager ID (if any):' }
        ]).then(res => {
          addEmployee(res.first_name, res.last_name, res.role_id, res.manager_id).then(() => {
            console.log('Employee added successfully!');
            mainMenu();
          });
        });
        break;

      case 'Update an employee role':
        inquirer.prompt([
          { type: 'input', name: 'employee_id', message: 'Enter the employee ID:' },
          { type: 'input', name: 'role_id', message: 'Enter the new role ID:' }
        ]).then(res => {
          updateEmployeeRole(res.employee_id, res.role_id).then(() => {
            console.log('Employee role updated successfully!');
            mainMenu();
          });
        });
        break;

      default:
        process.exit();
    }
  });
};

mainMenu();