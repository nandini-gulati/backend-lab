// controllers/todoController.js
import Todo, { validateTodo } from "../models/Todo.js";

// Create Todo
export const createTodo = async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Get all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
