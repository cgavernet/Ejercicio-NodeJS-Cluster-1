const { body, validationResult } = require('express-validator');

const createUserValidator = [
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),
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

const updateUserValidator = [
    body('firstName')
        .optional()
        .notEmpty(),
    body('lastName')
        .optional()
        .notEmpty(),
    body('email')
        .optional()
        .isEmail(),
    body('username')
        .optional()
        .notEmpty(),
    body('password')
        .optional()
        .isLength({ min: 8 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

const createBookValidator = [
    body('isbn')
        .notEmpty()
        .isNumeric(),
    body('titulo').notEmpty(),
    body('autor').notEmpty(),
    body('year').notEmpty(),
    body('library').notEmpty(),    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const updateBookValidator = [
    body('isbn')
        .optional()
        .notEmpty()
        .isNumeric(),
    body('titulo')
        .optional()
        .notEmpty(),
    body('autor')
        .optional()
        .notEmpty(),
    body('year')
        .optional()
        .notEmpty(),
    body('library')
        .optional()
        .notEmpty(),    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const createLibraryValidator = [
    body('name').notEmpty(),
    body('location').notEmpty(),
    body('telefono').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const updateLibraryValidator = [
    body('name')
        .optional()
        .notEmpty(),
    body('location')
        .optional()
        .notEmpty(),
    body('telefono')
        .optional()
        .notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
module.exports = { createUserValidator, updateUserValidator, createBookValidator, updateBookValidator, createLibraryValidator, updateLibraryValidator };