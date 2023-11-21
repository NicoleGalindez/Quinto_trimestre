import express from "express";
import cors from "cors";
import router from "./rutas/mirutas.js";
import mongoose from "mongoose";

const app = express();

app.use(cors({}));  // Enable CORS

app.use(express.json()); // Parse JSON requests
// Connect to MongoDB

try {
  
  await mongoose.connect('mongodb://localhost:27017/estudiantes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connection successful");
  
} catch (error) {
  console.error("Error connecting to MongoDB", error);}

// Define routes
app.use("/aprendices", router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

console.log("After MongoDB connection");
// Resto de tu código
console.log("After defining routes");
