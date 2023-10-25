import modelos from "../modelo/mimodelo.js"; // Asegúrate de que la ruta sea correcta

const Instructor = modelos.Instructor;

// Controlador para obtener todos los instructores
export const obtenerTodosLosInstructores = async (req, res) => {
  try {
    const instructores = await Instructor.find();
    res.json(instructores);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los instructores",
      error: error.message,
    });
  }
};

// Controlador para obtener un instructor por ID
export const obtenerInstructorPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const instructor = await Instructor.findById(id);
    if (instructor) {
      res.json(instructor);
    } else {
      res
        .status(404)
        .json({ message: `No se encontró un instructor con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el instructor",
      error: error.message,
    });
  }
};

// Controlador para crear un nuevo instructor
export const crearInstructor = async (req, res) => {
  const nuevoInstructor = req.body;
  try {
    const instructorCreado = await Instructor.create(nuevoInstructor);
    res.status(201).json(instructorCreado);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el instructor", error: error.message });
  }
};

// Controlador para actualizar un Instructor por ID
export const actualizarInstructorPorID = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  try {
    const instructorActualizado = await Instructor.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (instructorActualizado) {
      res.json({ message: `Instructor con ID ${id} actualizado correctamente` });
    } else {
      res.status(404).json({ message: `No se encontró un Instructor con ID ${id}` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el Instructor", error: error.message });
  }
};

// Controlador para eliminar un Instructor por ID
export const eliminarInstructorPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const instructorEliminado = await Instructor.findByIdAndDelete(id);
    if (instructorEliminado) {
      res.json({ message: `Instructor con ID ${id} eliminado correctamente` });
    } else {
      res.status(404).json({ message: `No se encontró un Instructor con ID ${id}` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el Instructor", error: error.message });
  }
};



const instructorController={
  obtenerTodosLosInstructores,obtenerInstructorPorID, crearInstructor, actualizarInstructorPorID,eliminarInstructorPorID
}

export default instructorController;