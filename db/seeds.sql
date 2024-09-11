-- Insert departments
INSERT INTO department (name) VALUES ('Engineering'), ('HR'), ('Finance');

-- Insert roles
INSERT INTO role (title, salary, department_id) 
VALUES ('Software Engineer', 60000, 1), 
       ('HR Manager', 50000, 2), 
       ('Accountant', 55000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, null), 
       ('Jane', 'Smith', 2, null), 
       ('Mark', 'Brown', 3, null);