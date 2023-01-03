const { check } = require('express-validator')

exports.userRegisterValidator = [
    check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
    check('email')
    .isEmail()
    .withMessage('Must be a valid email'),
    check('username')
    .not()
    .isEmpty()
    .withMessage('Username is required'),
    check('password')
    .isLength({ min: 5})
    .withMessage('Password must be 5 or more character long')    
]