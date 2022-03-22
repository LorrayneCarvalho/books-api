const errorMiddleware = (error, req, res, next) => {
    let statusCode = 400
    const errorMessage = error.message

    if (errorMessage.includes('Nenhum livro foi encontrado!')) {
        statusCode = 404
        message = errorMessage
    }

    res.status(400).json({ statusCode, message:errorMessage })
    next()
}

module.exports = errorMiddleware