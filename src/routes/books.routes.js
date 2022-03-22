const express = require('express')
const { getBooks, createBook, getBookById, updateBook, deleteBook } = require('../controllers/books.controller')
const booksRoutes = express.Router()

booksRoutes.get('/',  getBooks)
booksRoutes.get('/:id',  getBookById)
booksRoutes.post('/', createBook)
booksRoutes.put('/:id', updateBook)
booksRoutes.delete('/:id', deleteBook)

module.exports = booksRoutes