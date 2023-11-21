import modelos from "../modelo/mimodelo.js"; // Asegúrate de que la ruta sea correcta

const Resultados = modelos.Resultados;

// Controlador para obtener todos los resultados
export const obtenerTodosLosResultados = async (req, res) => {
  try {
    const resultados = await resultados.find();
    res.json(resultados);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los resultados",
      error: error.message,
    });
  }
};

// Controlador para obtener un resultado por ID
export const obtenerResultadoPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await resultado.findById(id);
    if (resultado) {
      res.json(resultado);
    } else {
      res.status(404).json({ message: `No se encontró un resultado con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el resultado", error: error.message });
  }
};

// Controlador para crear un nuevo resultado
export const crearResultado = async (req, res) => {
  const nuevoResultado = req.body;
  try {
    const resultadoCreado = await Resultados.create(nuevoResultado);
    res.status(201).json(resultadoCreado);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el resultado", error: error.message });
  }
};

// Controlador para actualizar un resultado por ID
export const actualizarResultadoPorID = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  try {
    const resultadoActualizado = await Resultados.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (resultadoActualizado) {
      res.json({ message: `Resultado con ID ${id} actualizado correctamente` });
    } else {
      res.status(404).json({ message: `No se encontró un resultado con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el resultado", error: error.message });
  }
};

// Controlador para eliminar un resultado por ID
export const eliminarResultadoPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const resultadoEliminado = await Resultados.findByIdAndDelete(id);
    if (resultadoEliminado) {
      res.json({ message: `Resultado con ID ${id} eliminado correctamente` });
    } else {
      res.status(404).json({ message: `No se encontró un resultado con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el resultado", error: error.message });
  }
};


const resultadosController={
  obtenerResultadoPorID,obtenerTodosLosResultados,crearResultado,actualizarResultadoPorID,eliminarResultadoPorID}
export default resultadosController;


