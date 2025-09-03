// Import express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory data store (our "database")
let todos = [
  { id: 1, task: "Learn Node.js", completed: false },
  { id: 2, task: "Build REST API", completed: false }
];

// ✅ GET - Fetch all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// ✅ GET - Fetch a single todo by id
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
});

// ✅ POST - Add a new todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// ✅ PUT - Update an existing todo
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.task = req.body.task !== undefined ? req.body.task : todo.task;
  todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;

  res.json(todo);
});

// ✅ DELETE - Remove a todo
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  const deleted = todos.splice(index, 1);
  res.json({ message: "Todo deleted", deleted });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
