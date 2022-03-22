const Joi = require('joi');

const createBookSchema = Joi.object({
    sbn: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    stock: Joi.number().required(),
});

module.exports = createBookSchema