# curso-3-nodejs-postgresql

This repository contains the materials for the "curso-nodejs-api-rest-express".

## Overview

This course provides in-depth knowledge and hands-on experience with building RESTful APIs using Node.js and Express.js. A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data. This course covers the basics of RESTful APIs and shows how to build a simple RESTful API with Node.js and Express.js. The course also explores how to perform advanced data modeling usign sequelize and PostgreSQL. 

To conect with the database, the course uses the ORM Sequelize, which is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.

We used Docker to create a container for the database. Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating system kernel and are thus more lightweight than virtual machines.

## Table of Contents

- [curso-3-nodejs-postgresql](#curso-3-nodejs-postgresql)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [VERCEL DEPLOY](#vercel-deploy)
  - [Api Endpoints](#api-endpoints)
  - [Built With](#built-with)
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

Star Docker container:

  ```bash
  docker-compose up
  ```

If you want to star the pgadmin interface for the database, you can do it in the following way:

  ```bash
  docker-compose up -d pgadmin
  ```

## VERCEL DEPLOY

The project is deployed in Vercel, you can see it in the following link:

[curso-nodejs-postgresql.vercel.app](https://curso-nodejs-postgresql.vercel.app/)



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
| /api/orders | GET | READ | Get all orders |
| /api/orders/:id | GET | READ | Get a single order |
| /api/orders | POST | CREATE | Add an order |
| /api/orders/:id | PUT | UPDATE | Update an order |
| /api/orders/:id | DELETE | DELETE | Delete an order |


## Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![NodeJS.org][NodeJS.org]][NodeJS-url]
* [![ExpressJS.com][ExpressJS.com]][ExpressJS-url]
* [![Docker.com][Docker.com]][Docker-url]
* [![PostgreSQL.org][PostgreSQL.org]][PostgreSQL-url]
* [![Sequelize.org][Sequelize.org]][Sequelize-url]
* [![Vercel.com][Vercel.com]][Vercel-url]


## Contributing

If you find any mistakes or have suggestions for improvement, please feel free to create an issue or pull request. If you create a pull request, I'll do my best to respond in a timely manner.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[NodeJS.org]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white (NodeJS.org)
[NodeJS-url]: https://nodejs.org/es/ (NodeJS.org)

[Docker.com]: https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white (Docker.com)
[Docker-url]: https://www.docker.com/ (Docker.com)

[PostgreSQL.org]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white (PostgreSQL.org)
[PostgreSQL-url]: https://www.postgresql.org/ (PostgreSQL.org)

[Sequelize.org]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white (Sequelize.org)
[Sequelize-url]: https://sequelize.org/ (Sequelize.org)

[ExpressJS.com]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge (ExpressJS.com)
[ExpressJS-url]: https://expressjs.com/ (ExpressJS.com)

[JWT.io]: https://img.shields.io/badge/JSON%20Web%20Tokens-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white (JWT.io)
[JWT-url]: https://jwt.io/ (JWT.io)

[PassportJS.com]: https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=white (PassportJS.com)
[PassportJS-url]: http://www.passportjs.org/ (PassportJS.com)

[Vercel.com]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white (Vercel.com)
[Vercel-url]: https://vercel.com/ (Vercel.com)