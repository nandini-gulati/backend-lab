const express = require("express");
const router = express.Router();
const Todo = require("../models/todoModel");

// 🟢 CREATE - Add a new task
router.post("/", async (req, res) => {
  try {
    const todo = new Todo({
      task: req.body.task,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔵 READ - Get all tasks
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🟡 UPDATE - Update a task
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔴 DELETE - Delete a task
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
