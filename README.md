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
| `example.txt`      | Sample file served by server code. |

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

🔹 Experiment 4 – Database Integration with MongoDB
🎯 Objective

To integrate a backend API with MongoDB and perform CRUD (Create, Read, Update, Delete) operations using Express and Mongoose.

🧰 Tools & Technologies

Node.js

Express.js

MongoDB (Atlas or local)

Mongoose

Postman (for API testing)

📂 Folder Structure
exp4/
├── models/
│   └── Todo.js
├── routes/
│   └── todoRoutes.js
├── server.js
├── package.json
├── .env
└── README.md

🚀 How to Run

Open a terminal in the backend lab/exp4 folder:

cd "backend lab/exp4"


Install dependencies:

npm install


Update your .env file with MongoDB details:

MONGO_URI = your_mongodb_connection_string
PORT = 4000


Start the server:

node server.js


✅ You’ll see:

🚀 Server running on port 4000
✅ Connected to MongoDB

🧪 Test API Using Postman
Method	Endpoint	Description	Body Example (JSON)
POST	/api/todos	Create a new to-do item	{ "task": "Buy groceries", "completed": false }
GET	/api/todos	Get all to-do items	—
PUT	/api/todos/:id	Update a to-do by ID	{ "task": "Pay bills", "completed": true }
DELETE	/api/todos/:id	Delete a to-do by ID	—
📊 Example JSON Response
{
  "_id": "67279ad12f5d7d81b3b4e1c2",
  "task": "Buy groceries",
  "completed": false,
  "__v": 0
}

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

