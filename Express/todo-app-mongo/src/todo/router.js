import express from 'express'
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from './service.js'

const todo_router = express.Router()

todo_router.get("/all", getAllTodos)
todo_router.get("/:id", getTodoById)
todo_router.post("/create", createTodo)
todo_router.put("/update/:id", updateTodo)
todo_router.delete("/delete/:id", deleteTodo)

export default todo_router