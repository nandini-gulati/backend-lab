# Backend Lab

A collection of Node.js backend experiments I'm working on at UPES—perfect for building fundamentals and explaining the code live in class.

---

## 📌 About This Repo

This repository contains backend practice experiments covering **Node.js fundamentals, streams, REST APIs, MongoDB, Mongoose, middleware, validation, and testing**.  
Each experiment builds practical skills and provides runnable examples.  
✅ The repository also contains a folder `outputs/` where you can see save screenshots, test results, and Postman outputs for reference.

---

## 🧪 Experiments Overview

<details>
<summary>🔹 Experiment 1 – Node.js Fundamentals</summary>

Covers the basics of Node.js modules, HTTP servers, and file handling.

| File Name          | Purpose |
|--------------------|---------|
| `exportObject.js`  | Exporting an object from a module. |
| `exportNested.js`  | Exporting nested objects and functions with `exports`. |
| `simpleServer.js`  | Basic HTTP server with request-response. |
| `readFileAsync.js` | Reading files asynchronously with error handling. |
| `textFileServer.js`| Serving a text file over HTTP with `fs` and `http`. |

</details>

<details>
<summary>🔹 Experiment 2 – Streams in Node.js</summary>

Demonstrates file reading, writing, piping, stdin input, and error handling using streams.

| File Name | Purpose |
|-----------|---------|
| `readablestream.js`   | Read data from a file (`data.txt`) using a Readable stream. |
| `writablestream.js`   | Write `"Hello, Node.js!"` to `output.txt` using a Writable stream. |
| `stream_piping.js`    | Demonstrate piping (`input.txt` → `output.txt`). |
| `read_user_input.js`  | Use `process.stdin` to take user input and greet the user. |
| `errorhandling_in_streams.js` | Error handling when reading a non-existent file. |

</details>

<details>
<summary>🔹 Experiment 3 – RESTful API with Express</summary>

Covers HTTP methods: **GET, POST, PUT, DELETE** and implements a simple To-Do List API.

| File Name     | Purpose |
|---------------|---------|
| `server.js`   | Express server implementing the To-Do API. |
| `package.json`| Node.js project setup file. |

#### Endpoints:
| Method     | Endpoint         | Description             | Body Example (JSON)                               |
| ---------- | ---------------- | ----------------------- | ------------------------------------------------- |
| **POST**   | `/todos`         | Create a new to-do item | `{ "task": "Buy groceries", "completed": false }` |
| **GET**    | `/todos`         | Get all to-do items     | —                                                 |
| **PUT**    | `/todos/:id`     | Update a to-do by ID    | `{ "task": "Pay bills", "completed": true }`      |
| **DELETE** | `/todos/:id`     | Delete a to-do by ID    | —                                                 |

</details>


### 🔹 Experiment 4 – Connecting Express with MongoDB

This experiment demonstrates how to connect a Node.js Express application to MongoDB using the official mongodb driver.
It covers CRUD (Create, Read, Update, Delete) operations for a To-Do List API.

<details>
<summary>🔹 Experiment 4 – Connecting Express with MongoDB</summary>

Demonstrates connecting a Node.js Express application to MongoDB and performing CRUD operations.

| File Name      | Purpose                                                               |
| -------------- | --------------------------------------------------------------------- |
| `server.js`    | Express server that connects to MongoDB and performs CRUD operations. |
| `package.json` | Contains dependencies for MongoDB and Express.                        |


#### Endpoints:
| Method     | Endpoint         | Description             | Body Example (JSON)                               |
| ---------- | ---------------- | ----------------------- | ------------------------------------------------- |
| **POST**   | `/api/todos`     | Create a new to-do item | `{ "task": "Buy groceries", "completed": false }` |
| **GET**    | `/api/todos`     | Get all to-do items     | —                                                 |
| **GET**    | `/api/todos/:id` | Get a single to-do      | —                                                 |
| **PUT**    | `/api/todos/:id` | Update a to-do by ID    | `{ "task": "Pay bills", "completed": true }`      |
| **DELETE** | `/api/todos/:id` | Delete a to-do by ID    | —                                                 |

</details>

<details>
<summary>🔹 Experiment 5 – MongoDB with Mongoose (ODM Operations)</summary>

Enhances MongoDB operations using **Mongoose ODM**, including pagination, virtuals, triggers, and indexing.

| File Name        | Purpose                                                       |
| ---------------- | ------------------------------------------------------------- |
| `server.js`      | Express server using Mongoose for MongoDB operations.         |
| `models/Todo.js` | Mongoose schema with validation, indexes, and virtual fields. |
| `package.json`   | Contains dependencies for Express and Mongoose.               |


#### Features:
- Pagination using query params (?page=1&limit=5)  
- Pre-save hooks (triggers)  
- Virtual fields for computed values  
- Indexing for optimized queries  

#### Endpoints:
- `GET /todos` → Fetch all todos  
- `GET /todos/:id` → Fetch todo by ID  
- `POST /todos` → Add a new todo  
- `PUT /todos/:id` → Update a todo  
- `DELETE /todos/:id` → Delete a todo  

Steps to Run:
1) Navigate to the folder:
   ```bash
   cd exp4

| Method     | Endpoint         | Description             | Body Example (JSON)                               |
| ---------- | ---------------- | ----------------------- | ------------------------------------------------- |
| **POST**   | `/api/todos`     | Create a new to-do item | `{ "title": "Buy groceries", "completed": false }` |
| **GET**    | `/api/todos`     | Get all to-do items     | —                                                 |
| **GET**    | `/api/todos?page=1&limit=5` | Get paginated todos | —                                                 |

</details>


<details>
<summary>🔹 Experiment 6 – Middleware & Advanced Routing in Express</summary>


2) Install dependencies:
    ```bash
    npm install

3) Start the server:
   ```bash
   node server.js
   
4) Open Postman and test endpoints like:
   ```bash
   http://localhost:4000/api/todos
   
5) Check your MongoDB data in MongoDB Compass under the selected database and collection.

Focuses on middleware functions and advanced routing techniques in Express.

| File Name                    | Purpose                                                           |
| ---------------------------- | ----------------------------------------------------------------- |
| `server.js`                  | Main Express app using middleware for logging and error handling. |
| `routes/todos.js`            | Contains To-Do routes (GET, POST, PUT, DELETE).                   |
| `middleware/logger.js`       | Custom middleware to log every request.                           |
| `middleware/errorHandler.js` | Centralized error-handling middleware.                            |
| `package.json`               | Project setup with Express dependency.                            |


#### Features:
1. Custom request logger middleware  
2. Centralized error handling  
3. Dynamic routes (e.g. `/api/todos/:id`)  
4. Modular routing with `express.Router()`


</details>

<details>
<summary>🔹 Experiment 7 – Testing Backend Applications</summary>

**Objective:** Implement testing strategies for backend applications.  


This experiment introduces **unit testing, integration testing, and debugging** using **Jest** and **Supertest** for the To-Do List API.

#### Lab Activities:
- Overview of testing types (unit, integration, end-to-end)  
- Writing and running tests with Jest and Supertest  
- Debugging common backend issues  


🧪 Test API Using Postman
| Method     | Endpoint         | Description             | Body Example (JSON)                               |
| ---------- | ---------------- | ----------------------- | ------------------------------------------------- |
| **POST**   | `/api/todos`     | Create a new to-do item | `{ "task": "Buy groceries", "completed": false }` |
| **GET**    | `/api/todos`     | Get all to-do items     | —                                                 |
| **PUT**    | `/api/todos/:id` | Update a to-do by ID    | `{ "task": "Pay bills", "completed": true }`      |
| **DELETE** | `/api/todos/:id` | Delete a to-do by ID    | —                                                 |
---

### 🔹 Experiment 5 – MongoDB with Mongoose (ODM Operations)

This experiment introduces Mongoose, an ODM (Object Data Modeling) library for MongoDB.
It enhances database interaction with schema validation, pagination, virtuals, indexing, and triggers.

| File Name        | Purpose                                                       |
| ---------------- | ------------------------------------------------------------- |
| `server.js`      | Express server using Mongoose for MongoDB operations.         |
| `models/Todo.js` | Mongoose schema with validation, indexes, and virtual fields. |
| `package.json`   | Contains dependencies for Express and Mongoose.               |


## Features:

- Pagination using query params (?page=1&limit=5)
- Pre-save hooks (triggers)
- Virtual fields for computed values
- Indexing for optimized queries

### Steps to Run:

1) Navigate to the folder:
   ```bash
   cd exp5


2) Install dependencies:
    ```bash
    npm install

3) Start the server:
   ```bash
   node server.js
   
4) Open Postman and test routes:

`GET /api/todos?page=1&limit=5`
`POST /api/todos` (add task)
   
5) Check MongoDB Compass → Database: `todoDB` → Collection: `todos`.


---

### 🔹 Experiment 6 – Middleware & Advanced Routing in Express

This experiment focuses on middleware functions and advanced routing techniques in Express.
You’ll implement logging, error handling, and nested/dynamic routes.

| File Name                    | Purpose                                                           |
| ---------------------------- | ----------------------------------------------------------------- |
| `server.js`                  | Main Express app using middleware for logging and error handling. |
| `routes/todos.js`            | Contains To-Do routes (GET, POST, PUT, DELETE).                   |
| `middleware/logger.js`       | Custom middleware to log every request.                           |
| `middleware/errorHandler.js` | Centralized error-handling middleware.                            |
| `package.json`               | Project setup with Express dependency.                            |

## Features:

1) Custom request logger middleware

2) Centralized error handling

3) Dynamic routes (e.g. `/api/todos/:id` )

4) Modular routing with `express.Router()`

### Steps to Run:

1) Navigate to the folder:
   ```bash
   cd exp6


2) Install dependencies:
    ```bash
    npm install

3) Start the server:
   ```bash
   node server.js

4) Open Postman and test routes:
   `GET /api/todos`
   `POST /api/todos`
   `PUT /api/todos/:id`
   `DELETE /api/todos/:id`

5) Check console logs for middleware output

   
---
   
   
## 🚀 How to Run This Repo Locally
=======
#### Files:
| File Name            | Purpose |
|----------------------|---------|
| `server.js`          | Express app with exported `app` for testing. |
| `tests/todo.test.js` | Jest and Supertest tests for To-Do API endpoints. |
| `package.json`       | Project setup with scripts for testing and dependencies. |

#### Features:
- Unit tests for POST/GET endpoints  
- Integration tests for API routes  
- Debugging via console and Jest output  

#### Steps to Run:
1) Navigate to the folder:
   ```bash
   cd exp7


2) Install dependencies:
    ```bash
    npm install express mongoose dotenv
    npm install --save-dev jest supertest

3) Run the tests:
   ```bash
   npm test

</details>

<details>

<summary>🔹 Experiment 8 – Data Validation & Error Handling </summary>

**Objective:** Learn to validate data and handle errors gracefully.

This experiment adds **input validation** and **error handling** to the To-Do API using **Joi** and **express-validator**.

#### Lab Activities:
- Implement input validation with Joi or express-validator  
- Structure and handle API errors  
- Send proper HTTP status codes and error messages  

#### Files:
| File Name                      | Purpose |
|--------------------------------|---------|
| `server.js`                    | Express server implementing validation and error handling. |
| `models/Todo.js`               | Mongoose schema with Joi validation. |
| `controllers/todoController.js` | Handles API logic with validation and error handling. |
| `routes/todoRoutes.js`         | Defines validated API routes. |
| `package.json`                 | Contains dependencies for Express, Joi, and validator libraries. |

#### Features:
- Input validation for new todos  
- Graceful error handling with meaningful HTTP responses  
- Prevention of invalid data from being saved  
- Compatible with testing using Jest + Supertest  

#### Endpoints:
| Method     | Endpoint         | Description                     | Body Example (JSON)                         |
| ---------- | ---------------- | ------------------------------- | ------------------------------------------- |
| **POST**   | `/api/todos`     | Create a new to-do item         | `{ "title": "Learn validation", "completed": false }` |
| **GET**    | `/api/todos`     | Get all to-do items             | —                                           |
| **GET**    | `/api/todos/:id` | Get a single to-do item         | —                                           |

#### Steps to Run:
1) Navigate to the folder:
   ```bash
   cd exp8


2) Install dependencies:
    ```bash
    npm install express mongoose dotenv joi express-validator


</details>
