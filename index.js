import express from 'express'
import path from 'path'
import dotenv from "dotenv"
import booksRouter from './Books/books.router.js';
import { dbConnection } from './dbConnection/dbConnection.js';
import cors from 'cors'
// caret server
dotenv.config({path:path.resolve('./config/.env')})
const app = express();

app.use(cors());
const port = process.env.PORT|| 3000;

app.use(express.json());
// import db
dbConnection()
console.log(process.env.DB_URL); 


app.use('/books',booksRouter)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

