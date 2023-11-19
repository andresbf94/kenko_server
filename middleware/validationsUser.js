const { body, validationResult } = require('express-validator');

const userValidationRules = () => {
  return [
    body('nombre').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('email').isEmail().withMessage('El email no tiene un formato válido'),
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('telefono').isLength({ min: 9, max: 15 }).withMessage('El teléfono debe tener entre 9 y 15 caracteres'),
    body('direccion').notEmpty().withMessage('La dirección es obligatoria'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
};

module.exports = { userValidationRules, validate };