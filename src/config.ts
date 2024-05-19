import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000
export const DB_HOST:string = process.env.DB_HOST || "localhost"
export const DB_PORT: number = parseInt(process.env.DB_PORT || "3308");
export const DB_USER:string = process.env.DB_USER || "root"
export const DB_PASSWORD:string = process.env.DB_PASSWORD || "Recort@ble2026"
export const DB_DATABASE:string = process.env.DB_DATABASE || "todoList" 
