import modelos from "../modelo/mimodelo.js"; // Asegúrate de que la ruta sea correcta

const Curso = modelos.Curso;

// Controlador para obtener todos los cursos
export const obtenerTodosLosCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los cursos", error: error.message });
  }
};

// Controlador para obtener un curso por ID
export const obtenerCursoPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await Curso.findById(id);
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).json({ message: `No se encontró un curso con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el curso", error: error.message });
  }
};

// Controlador para crear un nuevo curso
export const crearCurso = async (req, res) => {
  const nuevoCurso = req.body;
  try {
    const cursoCreado = await Curso.create(nuevoCurso);
    res.status(201).json(cursoCreado);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el curso", error: error.message });
  }
};

// Controlador para actualizar un curso por ID
export const actualizarCursoPorID = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  try {
    const cursoActualizado = await Curso.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (cursoActualizado) {
      res.json({ message: `Curso con ID ${id} actualizado correctamente` });
    } else {
      res.status(404).json({ message: `No se encontró un curso con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el curso", error: error.message });
  }
};

// Controlador para eliminar un curso por ID
export const eliminarCursoPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const cursoEliminado = await Curso.findByIdAndDelete(id);
    if (cursoEliminado) {
      res.json({ message: `Curso con ID ${id} eliminado correctamente` });
    } else {
      res.status(404).json({ message: `No se encontró un curso con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el curso", error: error.message });
  }
};


const cursoController={
  obtenerTodosLosCursos,obtenerCursoPorID, crearCurso,actualizarCursoPorID,eliminarCursoPorID
}
export default cursoController;