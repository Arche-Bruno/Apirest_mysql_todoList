import express from "express"
import { createTodo, getAllTodo,deleteTodo,putTodo,getTodoList } from "../controllers/todoList_controller";


const route = express.Router();

route.get("/todoList",getAllTodo)
route.get("/todoList/:id",getTodoList)
route.post("/todoList", createTodo);
route.delete("/todoList/:id",deleteTodo);
route.put("/todoList/:id",putTodo);


export default route