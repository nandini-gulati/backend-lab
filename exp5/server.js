const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/exp5_todo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Define Mongoose Schema
const todoSchema = new mongoose.Schema(
  {
    task: { type: String, required: true, index: true }, // index for faster search
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { toJSON: { virtuals: true } }
);

// Virtual field example
todoSchema.virtual('taskStatus').get(function () {
  return this.completed ? '✅ Done' : '🕒 Pending';
});

// ✅ Step 4: Middleware (Trigger-like behavior)
todoSchema.pre('save', function (next) {
  console.log(`📢 Before saving task: ${this.task}`);
  next();
});

// Model creation
const Todo = mongoose.model('Todo', todoSchema);



// Create Todo
app.post('/api/todos', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Todos (with pagination)
app.get('/api/todos', async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query; // pagination params
    const todos = await Todo.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single Todo by ID
app.get('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Todo
app.put('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Todo
app.delete('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const PORT = 8000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
