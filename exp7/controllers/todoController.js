import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.status(201).json(todo);
};

export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};
