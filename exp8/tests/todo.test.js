// tests/todo.test.js
import request from "supertest";
import app from "../server.js"; // make sure server.js exports `app`

describe("To-do API", () => {
  it("POST /api/todos should create a new todo", async () => {
    const res = await request(app)
      .post("/api/todos")
      .send({ title: "Test Todo", description: "Test Description" });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.title).toBe("Test Todo");
  });

  it("GET /api/todos should return todos list", async () => {
    const res = await request(app).get("/api/todos");

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
