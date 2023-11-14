// controladores/reserva.controller.js
const Reserva = require('../models/reserva.model');

// Controlador para obtener todas las reservas
exports.getAllReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para obtener una reserva por ID
exports.getReservaById = async (req, res) => {
  try {
    const { reservaId } = req.params;
    const reserva = await Reserva.findById(reservaId);
    res.json(reserva);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para crear una reserva
exports.createReserva = async (req, res) => {
  try {
    const { fecha, hora, numPer } = req.body;

    // Consulta todas las reservas existentes para la combinación de fecha, horario y tipo de servicio
    const reservasParaComb = await Reserva.find({ fecha, hora });
    const totalPersonasReservadas = reservasParaComb.reduce((total, reserva) => total + reserva.numPer, 0);
    const aforoMaximo = 50; // El aforo máximo fijado del restaurante

    if (totalPersonasReservadas + numPer <= aforoMaximo) {
      // Crea una nueva reserva en la base de datos
      const reserva = new Reserva(req.body);
      await reserva.save();

      res.json({ mensaje: 'Reserva exitosa' });
    } else {
      res.json({ mensaje: 'El aforo máximo ha sido alcanzado para esta combinación' });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Controlador para actualizar una reserva
exports.updateReserva = async (req, res) => {
  try {
    const { reservaId } = req.params;
    const updatedReserva = await Reserva.findByIdAndUpdate(
      reservaId,
      {
        $set: req.body, // Usa $set para actualizar los campos especificados en req.body
      },
      { new: true }
    );

    if (!updatedReserva) {
      return res.status(404).json({ mensaje: 'Reserva no encontrada' });
    }

    res.json(updatedReserva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar una reserva
exports.deleteReservaById = async (req, res) => {
  try {
    const { reservaId } = req.params;
    const deletedReserva = await Reserva.findByIdAndDelete(reservaId);

    if (!deletedReserva) {
      return res.status(404).json({ mensaje: 'Reserva no encontrada' });
    }

    res.json({ mensaje: 'Reserva eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};