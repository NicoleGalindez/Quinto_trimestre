// con mongo db________________________-
import mongoose from "mongoose";

// Conexión a la base de datos MongoDB
mongoose.connect("mongodb://localhost/tu_basededatos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definición de los esquemas de documentos para MongoDB
const CursoSchema = new mongoose.Schema({
  nombreCurso: String,
});

const AprendizSchema = new mongoose.Schema({
  nombreAprendiz: String,
  passwordAprendiz: String,
  emailAprendiz: String,
  Curso_idCurso: mongoose.Schema.Types.ObjectId, // Referencia a Curso
});

const CompetenciaSchema = new mongoose.Schema({
  nombreCompetencia: String,
  Curso_idCurso: mongoose.Schema.Types.ObjectId, // Referencia a Curso
});

const NotasSchema = new mongoose.Schema({
  Nota1: Number,
  Nota2: Number,
  Nota3: Number,
});

const ResultadosSchema = new mongoose.Schema({
  nombreResultados: String,
  Competencia_idCompetencia: mongoose.Schema.Types.ObjectId, // Referencia a Competencia
  Notas_idNotas: mongoose.Schema.Types.ObjectId, // Referencia a Notas
});

const InstructorSchema = new mongoose.Schema({
  nombreInstructor: String,
});

// Creación de los modelos para MongoDB
const Curso = mongoose.model("Curso", CursoSchema);
const Aprendiz = mongoose.model("Aprendiz", AprendizSchema);
const Competencia = mongoose.model("Competencia", CompetenciaSchema);
const Notas = mongoose.model("Notas", NotasSchema);
const Resultados = mongoose.model("Resultados", ResultadosSchema);
const Instructor = mongoose.model("Instructor", InstructorSchema);

const modelos = {
  Curso,
  Aprendiz,
  Competencia,
  Notas,
  Resultados,
  Instructor,
};

export default modelos;

