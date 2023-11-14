// controllers/producto.controller.js
const Producto = require('../models/producto.model');

// Controlador para obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para obtener un producto por ID
exports.getProductoById = async (req, res) => {
  try {
    const { productoId } = req.params;
    const producto = await Producto.findById(productoId);
    res.json(producto);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para crear un nuevo producto
exports.createProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.json(producto);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para modificar un producto
exports.updateProducto = async (req, res) => {
  try {
    const { productoId } = req.params;
    const updatedProducto = await Producto.findByIdAndUpdate(
      productoId,
      { $set: req.body },  // Utiliza $set para actualizar los campos especificados en req.body
      { new: true }
    );

    if (!updatedProducto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    res.json(updatedProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un producto
exports.deleteProductoById = async (req, res) =>{
  try {
    const { productoId } = req.params;
    const producto = await Producto.findByIdAndDelete(productoId);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}