const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

// GET a todo by ID (dynamic route)
router.get('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      const error = new Error("Todo not found");
      error.status = 404;
      throw error;
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

// POST new todo
router.post('/', async (req, res, next) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
});

// PUT update todo
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE todo
router.delete('/:id', async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
