const { body, validationResult } = require('express-validator');

const userValidator = [
    body('firstname').notEmpty(),
    body('lastname').notEmpty(),
    body('email').isEmail(),
    body('username').notEmpty(),
    body('password').isLength({ min: 8 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

const bookValidator = [
    body().isJSON(),
    body('isbn').notEmpty(),
    body('titulo').notEmpty(),
    body('autor').notEmpty(),
    body('year').notEmpty(),    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const libraryValidator = [
    body().isJSON(),
    body('name').isEmpty(),
    body('location').isEmpty(),
    body('telefono').isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    }

];

module.exports = { userValidator, bookValidator, libraryValidator };