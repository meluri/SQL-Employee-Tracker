const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

client.connect();

// Query to view all departments
const viewDepartments = () => {
  return client.query('SELECT * FROM department');
};

// Query to view all roles
const viewRoles = () => {
  return client.query(`
    SELECT role.id, role.title, role.salary, department.name AS department
    FROM role
    JOIN department ON role.department_id = department.id;
  `);
};

// Query to view all employees
const viewEmployees = () => {
  return client.query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id;
  `);
};

// Query to add a department
const addDepartment = (name) => {
  return client.query('INSERT INTO department (name) VALUES ($1)', [name]);
};

// Query to add a role
const addRole = (title, salary, department_id) => {
  return client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
};

// Query to add an employee
const addEmployee = (first_name, last_name, role_id, manager_id) => {
  return client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id]);
};

// Query to update an employee's role
const updateEmployeeRole = (employee_id, role_id) => {
  return client.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
};

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};