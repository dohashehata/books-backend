import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getOneBooks, updateBook } from "./books.controller.js";

const booksRouter=Router()

// add
booksRouter.post('/',addBook)

// get All
booksRouter.get('/',getAllBooks)

// get one
booksRouter.get('/oneBook/:id',getOneBooks)

// update book
booksRouter.put('/:id',updateBook)

// delete book
booksRouter.delete('/:id',deleteBook)

export default booksRouter
