import express from "express"
import { config } from "dotenv";

import RouteTodoList from "./routes/todoList_routes"
import { PORT } from "./config";
config();
const app = express();


app.use(express.json());



app.use(RouteTodoList);
app.use((_req,res)=>{
   res.status(404).json({message:"endpoint not found"})
})

app.listen(PORT, ()=>{
    console.log("listening on the port ", PORT )
})
