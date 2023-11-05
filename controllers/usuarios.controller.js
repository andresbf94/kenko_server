// controllers/usuario.controller.js
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Controlador para obtener todos los usuarios
exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para obtener un usuario por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const usuario = await Usuario.findById(usuarioId);
    res.json(usuario);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para registrar un nuevo usuario
exports.registerUsuario = async (req, res) => {
  const { email } = req.body;
  const usuarioExiste = await Usuario.findOne({ email });

  if (usuarioExiste) {
    return res.json({ error: 'El correo electrónico ya está en uso' });
  }

  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const usuario = await Usuario.create(req.body);
    res.json(usuario);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para iniciar sesión
exports.loginUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email });

    if (!usuario) {
      return res.json({ error: 'Error en email/contraseña' });
    }

    const eq = bcrypt.compareSync(req.body.password, usuario.password);

    if (!eq) {
      return res.json({ error: 'Error en email/contraseña' });
    }

    res.json({
      success: 'Login correcto',
      token: createToken(usuario),
      id: usuario._id,
      rol: usuario.rol,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

function createToken(usuario) {
  const payload = {
    id: usuario._id,
    rol: usuario.rol,
  };
  return jwt.sign(payload, 'token');
}