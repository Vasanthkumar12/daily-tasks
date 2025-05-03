import { getTodo, postTodo } from "../Controller/todoController.js";
import express from 'express'

const todoRoutes = express.Router()
todoRoutes.post('/todos', postTodo)
todoRoutes.get('/todos', getTodo)

export default todoRoutes