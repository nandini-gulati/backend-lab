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

## 🚀 How to Run This Repo Locally

### Prerequisites
- Install [Node.js](https://nodejs.org/) (v12 or higher).
- Use a terminal or shell environment.

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/backend-lab.git
   cd backend-lab

