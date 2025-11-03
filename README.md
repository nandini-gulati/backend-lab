# Backend Lab

A collection of Node.js backend experiments I'm working on at UPES—perfect for building fundamentals and explaining the code live in class.

---

## 📌 About This Repo

This repository contains backend practice experiments covering **Node.js fundamentals, streams, and REST APIs**.  
Each experiment builds practical skills and provides runnable examples.

---

## 🧪 Experiments Overview

### 🔹 Experiment 1 – Node.js Fundamentals
Covers the basics of Node.js modules, HTTP servers, and file handling.

| File Name          | Purpose |
|--------------------|---------|
| `exportObject.js`  | Exporting an object from a module. |
| `exportNested.js`  | Exporting nested objects and functions with `exports`. |
| `simpleServer.js`  | Basic HTTP server with request-response. |
| `readFileAsync.js` | Reading files asynchronously with error handling. |
| `textFileServer.js`| Serving a text file over HTTP with `fs` and `http`. |

---

### 🔹 Experiment 2 – Streams in Node.js
Demonstrates file reading, writing, piping, stdin input, and error handling using streams.

| File Name | Purpose |
|-----------|---------|
| `readablestream.js`   | Read data from a file (`data.txt`) using a Readable stream. |
| `writablestream.js`   | Write `"Hello, Node.js!"` to `output.txt` using a Writable stream. |
| `stream_piping.js`   | Demonstrate piping (`input.txt` → `output.txt`). |
| `read_user_input.js`   | Use `process.stdin` to take user input and greet the user. |
| `errorhandling_in_streams.js`   | Error handling when reading a non-existent file. |

---

### 🔹 Experiment 3 – RESTful API with Express
Introduces **backend development with REST APIs** using Express.

- Covers HTTP methods: **GET, POST, PUT, DELETE**
- Implements a simple **To-Do List API**

| File Name     | Purpose |
|---------------|---------|
| `server.js`   | Express server implementing the To-Do API. |
| `package.json`| Node.js project setup file. |

#### Endpoints:
- `GET /todos` → Fetch all todos  
- `GET /todos/:id` → Fetch todo by ID  
- `POST /todos` → Add a new todo  
- `PUT /todos/:id` → Update a todo  
- `DELETE /todos/:id` → Delete a todo  

---

###🔹 Experiment 4 – Connecting Express with MongoDB

This experiment demonstrates how to connect a Node.js Express application to MongoDB using the official mongodb driver.
It covers CRUD (Create, Read, Update, Delete) operations for a To-Do List API.

###📂 Folder Structure  

exp4/
├── models/
│   └── Todo.js
├── routes/
│   └── todoRoutes.js
├── server.js
├── package.json
├── .env
└── README.md


| File Name      | Purpose                                                               |
| -------------- | --------------------------------------------------------------------- |
| `server.js`    | Express server that connects to MongoDB and performs CRUD operations. |
| `package.json` | Contains dependencies for MongoDB and Express.                        |


#### Endpoints:
- `GET /todos` → Fetch all todos  
- `GET /todos/:id` → Fetch todo by ID  
- `POST /todos` → Add a new todo  
- `PUT /todos/:id` → Update a todo  
- `DELETE /todos/:id` → Delete a todo  

Steps to Run:
1) Navigate to the folder:
   cd exp4


2) Install dependencies:
    npm install

3) Start the server:
   node server.js
   
4) Open Postman and test endpoints like:
   http://localhost:4000/api/todos
   
5) Check your MongoDB data in MongoDB Compass under the selected database and collection.



✅ You’ll see:

🚀 Server running on port 4000
✅ Connected to MongoDB

🧪 Test API Using Postman
| Method     | Endpoint         | Description             | Body Example (JSON)                               |
| ---------- | ---------------- | ----------------------- | ------------------------------------------------- |
| **POST**   | `/api/todos`     | Create a new to-do item | `{ "task": "Buy groceries", "completed": false }` |
| **GET**    | `/api/todos`     | Get all to-do items     | —                                                 |
| **PUT**    | `/api/todos/:id` | Update a to-do by ID    | `{ "task": "Pay bills", "completed": true }`      |
| **DELETE** | `/api/todos/:id` | Delete a to-do by ID    | —                                                 |


🏁 Conclusion

This experiment demonstrates how to integrate MongoDB with an Express.js backend.
It shows how to build persistent APIs and perform CRUD operations using Mongoose.

## 🚀 How to Run This Repo Locally

### Prerequisites
- Install [Node.js](https://nodejs.org/) (v12 or higher).
- Use a terminal or shell environment.

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/backend-lab.git
   cd backend-lab

