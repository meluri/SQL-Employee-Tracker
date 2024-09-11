# Employee Tracker

## Description

Employee Tracker is a command-line application that allows business owners to manage their company's employee database. This tool helps users organize and plan their business by providing functionality to view and manage departments, roles, and employees in a PostgreSQL database.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:meluri/SQL-Employee-Tracker.git
   cd employee-tracker
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Create a PostgreSQL database named `employee_tracker` and run the SQL commands located in `db/schema.sql` to set up the tables.

4. (Optional) Populate the database with sample data using the SQL commands in `db/seeds.sql`.

5. Create a `.env` file in the root directory and add your PostgreSQL credentials:

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=yourusername
   DB_PASSWORD=yourpassword
   DB_DATABASE=employee_tracker
   ```

6. Start the application:

   ```
   node app.js
   ```

## Usage

Once the application starts, you'll be presented with a menu of options to manage your employee database. You can:

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

Simply use the arrow keys to navigate through the options and hit `Enter` to select.

## Walkthrough Video

Here’s a walkthrough video demonstrating the application’s functionality:

[Walkthrough Video Link](#)

## Features

- View all departments, roles, and employees in the database.
- Add new departments, roles, and employees.
- Update an employee’s role.
- Organize employees by department and manager.
- Easy-to-use command-line interface with prompts.

## Technologies Used

- **Node.js**: JavaScript runtime used to build the application.
- **PostgreSQL**: Relational database to store and manage employee data.
- **pg package**: PostgreSQL client for Node.js to run SQL queries.
- **Inquirer.js**: Command-line user interaction and prompts.
- **dotenv**: Secure environment variable management.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

Contributions are welcome! Please follow these steps if you would like to contribute to the project:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## Questions

If you have any questions, feel free to reach out via email at [melvinurias2@gmail.com].

---

Let me know if you'd like to add more details or sections!