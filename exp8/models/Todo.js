// models/Todo.js
import mongoose from "mongoose";
import Joi from "joi";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Validation function using Joi
export const validateTodo = (todo) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().allow("").max(500),
    completed: Joi.boolean()
  });
  return schema.validate(todo);
};

export default mongoose.model("Todo", todoSchema);
