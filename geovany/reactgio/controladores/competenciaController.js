import modelos from "../modelo/mimodelo.js"; // Asegúrate de que la ruta sea correcta

const Competencia = modelos.Competencia;



// Controlador para obtener todas las competencias
export const obtenerTodasLasCompetencias = async (req, res) => {
  try {
    const competencias = await Competencia.find();
    res.json(competencias);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las competencias",
      error: error.message,
    });
  }
};

// Controlador para obtener una competencia por ID
export const obtenerCompetenciaPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const competencia = await Competencia.findById(id);
    if (competencia) {
      res.json(competencia);
    } else {
      res
        .status(404)
        .json({ message: `No se encontró una competencia con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la competencia",
      error: error.message,
    });
  }
};

// Controlador para crear una nueva competencia
export const crearCompetencia = async (req, res) => {
  const nuevaCompetencia = req.body;
  try {
    const competenciaCreada = await Competencia.create(nuevaCompetencia);
    res.status(201).json(competenciaCreada);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear la competencia", error: error.message });
  }
};

// Controlador para actualizar una competencia por ID
export const actualizarCompetenciaPorID = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  try {
    const competenciaActualizada = await Competencia.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (competenciaActualizada) {
      res.json({
        message: `Competencia con ID ${id} actualizada correctamente`,
      });
    } else {
      res
        .status(404)
        .json({ message: `No se encontró una competencia con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la competencia",
      error: error.message,
    });
  }
};

// Controlador para eliminar una competencia por ID
export const eliminarCompetenciaPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const competenciaEliminada = await Competencia.findByIdAndDelete(id);
    if (competenciaEliminada) {
      res.json({ message: `Competencia con ID ${id} eliminada correctamente` });
    } else {
      res
        .status(404)
        .json({ message: `No se encontró una competencia con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la competencia",
      error: error.message,
    });
  }
};






const competenciaController={
  obtenerTodasLasCompetencias,obtenerCompetenciaPorID, crearCompetencia,actualizarCompetenciaPorID,eliminarCompetenciaPorID
  };
  
export default competenciaController;