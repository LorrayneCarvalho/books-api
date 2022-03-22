const Joi = require('joi');

const updateBookSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    stock: Joi.number().required(),
});

module.exports = updateBookSchema