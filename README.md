# curso-3-nodejs-postgresql

This repository contains the materials for the "curso-nodejs-api-rest-express".

## Overview

This course provides in-depth knowledge and hands-on experience with building RESTful APIs using Node.js and Express.js.

## Table of Contents

- [curso-3-nodejs-postgresql](#curso-3-nodejs-postgresql)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Api Endpoints](#api-endpoints)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/AndresDiagoM/curso-nodejs-postgresql.git
2. Navigate to the project folder:
   ```bash
   cd curso-nodejs-postgresql
   ```
3. Install the dependencies:
   ```bash
    npm install
    ```
4. Start the server:
    ```bash
    npm start
    ```
5. Open your browser and go to http://localhost:3000

## Usage

To start the API server:

  ```bash
  npm start
  ```
Then, visit http://localhost:PORT in your browser or API tool.


## Api Endpoints

| Endpoint | HTTP Method | CRUD Method | Result |
| -------- | ----------- | ----------- | ------ |
| /api/users | GET | READ | get all users |
| /api/users/:id | GET | READ | get a single user |
| /api/users | POST | CREATE | add a user |
| /api/users/:id | PUT | UPDATE | update a user |
| /api/users/:id | DELETE | DELETE | delete a user |
| /api/products | GET | READ | get all products |
| /api/products/:id | GET | READ | get a single product |
| /api/products | POST | CREATE | add a product |
| /api/products/:id | PUT | UPDATE | update a product |
| /api/products/:id | DELETE | DELETE | delete a product |
| /api/categories/:id | GET | READ | Get all categories |
| /api/categories/:id | GET | READ | Get a single category |
| /api/categories | POST | CREATE | Add a category |
| /api/categories/:id | PUT | UPDATE | Update a category |
| /api/categories/:id | DELETE | DELETE | Delete a category |

## Contributing

If you find any mistakes or have suggestions for improvement, please feel free to create an issue or pull request. If you create a pull request, I'll do my best to respond in a timely manner.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.