import { conn } from "../db/db";
import { ModelTodoList } from "../interface/todoList_interface";



export const postTodo =async(data:ModelTodoList)=>{
  const [response] =  await conn.query('INSERT INTO lists (title,description,status) VALUES (?,?,?)',[data.title,data.description,data.status]);

  return response


}

export const getTodo =async(id:string)=>{
    const [response] = await conn.query('SELECT * FROM lists WHERE id = ?', [id]);
    return response

}



export const getAll = async()=>{
    const [response] = await conn.query('SELECT * FROM lists');
    return response;
}
export const deleteById = async(id:string)=>{
    const [response] = await conn.query('DELETE FROM lists  WHERE id=? ', [id]);
    return response;
}
export const putTodoById = async(id:string,data:ModelTodoList)=>{
    const [response] = await conn.query('UPDATE lists SET  title:=?,description=?,status=? WHERE id=?',[data.title,data.description,data.status,id])
    
    return response
}