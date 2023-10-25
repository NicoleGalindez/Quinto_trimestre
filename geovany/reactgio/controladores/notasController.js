import modelos from "../modelo/mimodelo.js"; // Asegúrate de que la ruta sea correcta

const Notas = modelos.Notas;

// Controlador para obtener todos las notas

export const obtenerTodasLasNotas = async (req, res) => {
  try {
    const notas = await notas.find();
    res.json(notas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las notas', error: error.message });
  }
};

// Controlador para obtener  las notas por id 

export const obtenerNotaPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const nota = await nota.findById(id);
    if (nota) {
      res.json(nota);
    } else {
      res.status(404).json({ message: `No se encontró una nota con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la nota', error: error.message });
  }
};

// Controlador para crear una nota

export const crearNota = async (req, res) => {
  const nuevaNota = req.body;
  try {
    const notaCreada = await Notas.create(nuevaNota);
    res.status(201).json(notaCreada);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la nota', error: error.message });
  }
};

// Controlador para actualizar una nota

export const actualizarNotaPorID = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  try {
    const notaActualizada = await Notas.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (notaActualizada) {
      res.json({ message: `Nota con ID ${id} actualizada correctamente` });
    } else {
      res.status(404).json({ message: `No se encontró una nota con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la nota', error: error.message });
  }
};


// Controlador para eliminar una nota

export const eliminarNotaPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const notaEliminada = await Notas.findByIdAndDelete(id);
    if (notaEliminada) {
      res.json({ message: `Nota con ID ${id} eliminada correctamente` });
    } else {
      res.status(404).json({ message: `No se encontró una nota con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la nota', error: error.message });
  }
};


const notasController={
  obtenerTodasLasNotas,obtenerNotaPorID, crearNota,actualizarNotaPorID,eliminarNotaPorID
}
export default notasController;