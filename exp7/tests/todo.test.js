// tests/todo.test.js
import request from "supertest";
import mongoose from "mongoose";
import app from "../app.js";

// Connect to test database
beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/exp7_test");
});

// Clean the DB after each test
afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

// Close connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

// -------------------------------
// TEST 1: Create a Todo
// -------------------------------
test("POST /api/todos should create a new todo", async () => {
  const res = await request(app)
    .post("/api/todos")
    .send({ title: "Test Task" });

  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe("Test Task");
});

// -------------------------------
// TEST 2: Get Todos
// -------------------------------
test("GET /api/todos should return todos list", async () => {
  await request(app).post("/api/todos").send({ title: "Task 1" });

  const res = await request(app).get("/api/todos");

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
});
