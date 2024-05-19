import { Request, Response } from "express";
import { deleteById, getAll, getTodo, postTodo, putTodoById } from "../services/todoList_services";
import { ResultSetHeader } from "mysql2";

export const getAllTodo = async (_req: Request, res: Response) => {
  try {
    const result = await getAll();
    if (Array.isArray(result) && result.length <= 0) {
      res.status(204).json([]);
      return;
    }

    res.status(200).json(result);
  } catch (error) {}
};
export const getTodoList=async(req:Request,res:Response)=>{
  const { id }= req.params;

    try {
        const result = await getTodo(id);
 

       const objList = Array.isArray(result) ? result[0] : []
       res.status(200).json(objList);
    } catch (error) {
        res.status(500).json({message:error})
    }

}
export const createTodo = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;

  try {
    const result = await postTodo({ title, description, status });

    if ((result as ResultSetHeader).affectedRows <= 0) {
      res.status(400).json({ message: "todo wasn´t created" });
      return;
    }
    const objTodo = {
      id: (result as ResultSetHeader).insertId,
      title,
      description,
      status,
    };
    res.status(201).json(objTodo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await deleteById(id);
    if((result as ResultSetHeader).affectedRows<=0){ 
       res.status(200).json({message:"this items has already been deleted"})
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const putTodo = async(req:Request,res:Response)=>{
     const {title,description,status} = req.body;
     const { id } = req.params
     if(!title || !description || !status){
        res.status(400).json({message:"all data is required"});
        return;
     }
    try {

        const result = await putTodoById(id,{title,description,status})
        console.log(result);
        if((result as ResultSetHeader).affectedRows<=0){

            res.status(304).json({message:"the item wasn´t update"})
            return;
        }
        const objTodo = {
            id,
            title,
            description,
            status,
        }
        res.status(201).json(objTodo);


        
    } catch (error) {
        res.status(500).json({ message: error });
    }

}