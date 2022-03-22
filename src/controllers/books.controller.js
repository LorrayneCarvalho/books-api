const Books = require("../database/entities/book")
const createBookSchema = require("./validators/create-book-validator")
const updateBookSchema = require("./validators/update-book-validator")

exports.getBooks = async (req, res, next) => {
    try {
        let page = 0
        let size = 10
        let order = 'ASC'
        let direction = 'id'

        const query = req.query
        
        if (query && query.page) {
            page = query.page
        }

        if (query && query.size) {
            size = query.size
        }

        if (query && query.order) {
            order = query.order
        }

        if (query && query.direction) {
            direction = query.direction
        }

        const books = await Books.findAll({ limit: Number(size), offset: Number(page) * Number(size), order: [[direction, order]] })

        if (books.length == 0) {
            throw new Error('Nenhum livro foi encontrado!')
        }
        
        res.status(200).json({ content: books })
    } catch(err) {
        next(err)
    }
}

exports.getBookById = async (req, res, next) => {
    try {
        const { id } = req.params
        
        const book = await Books.findOne({ where: { id }})
        
        if (!book) {
            throw new Error(`Nenhum livro com id ${id} foi encontrado!`)
        }
        
        res.status(200).json({ book })
    } catch(err) {
        next(err)
    }
}

exports.createBook = async (req, res, next) => {
    try {
        const { error } = createBookSchema.validate({ ...req.body })
        
        if (error) {
            throw new Error(error)
        }

        const sbnAlreadyExist = await Books.findAll({ where: { sbn: req.body.sbn }})
        
        if (sbnAlreadyExist.length > 0) {
            throw new Error("SBN já existe!")
        }

        const book = await Books.create({ ...req.body })

        res.status(201).json({ content: book })
    } catch(err) {
        next(err)
    }
}

exports.updateBook = async (req, res, next) => {
    try {
        const { id } = req.params
        const { error } = updateBookSchema.validate({ ...req.body })
        
        if (error) {
            throw new Error(error)
        }

        await Books.update({ ...req.body }, { where: { id }})
        const book = await Books.findOne({ where: { id }})

        res.status(200).json({ content: book })
    } catch(err) {
        next(err)
    }
}

exports.deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params
        const book = await Books.findOne({ where: { id }})
        
        if (!book) {
            throw new Error('Nenhum livro foi encontrado!')
        }

        await Books.destroy({ where: { id }})

        res.status(200).json({ content: `Livro com id: ${id} foi removido com sucesso.` })
    } catch(err) {
        next(err)
    }
}