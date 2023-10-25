
import modelos from "../modelo/mimodelo.js"; // Asegúrate de que la ruta sea correcta

const Aprendiz = modelos.Aprendiz;

// Controlador para obtener todos los aprendices
export const obtenerTodosLosAprendices = async (req, res) => {
  try {
    const aprendices = await Aprendiz.find();
    res.json(aprendices);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los aprendices", error: error.message });
  }
};


// Controlador para obtener un aprendiz por ID
export const obtenerAprendizPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const aprendiz = await Aprendiz.findById(id);
    if (aprendiz) {
      res.json(aprendiz);
    } else {
      res.status(404).json({ message: `No se encontró un aprendiz con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el aprendiz", error: error.message });
  }
};

// Controlador para crear un nuevo aprendiz
export const crearAprendiz = async (req, res) => {
  const nuevoAprendiz = req.body;
  try {
    const aprendizCreado = await Aprendiz.create(nuevoAprendiz);
    res.status(201).json(aprendizCreado);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el aprendiz", error: error.message });
  }
};

// Controlador para actualizar un aprendiz por ID
export const actualizarAprendizPorID = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  try {
    const aprendizActualizado = await Aprendiz.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (aprendizActualizado) {
      res.json({ message: `Aprendiz con ID ${id} actualizado correctamente` });
    } else {
      res.status(404).json({ message: `No se encontró un aprendiz con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el aprendiz", error: error.message });
  }
};

// Controlador para eliminar un aprendiz por ID
export const eliminarAprendizPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await Aprendiz.findByIdAndDelete(id);
    if (resultado) {
      res.json({ message: `Aprendiz con ID ${id} eliminado correctamente` });
    } else {
      res.status(404).json({ message: `No se encontró un aprendiz con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el aprendiz", error: error.message });
  }
};




const aprendizController={
obtenerTodosLosAprendices,obtenerAprendizPorID,crearAprendiz,actualizarAprendizPorID,eliminarAprendizPorID};

export  default aprendizController;