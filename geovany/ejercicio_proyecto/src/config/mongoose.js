// config/mongoose.js
import mongoose from "mongoose";

const configureMongoose = () => {
  mongoose.connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Conexión a MongoDB establecida");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Error de conexión a MongoDB: " + err);
  });
};

export default configureMongoose ;
