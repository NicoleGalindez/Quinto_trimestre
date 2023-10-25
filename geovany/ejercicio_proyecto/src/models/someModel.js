// models/someModel.js
import mongoose from "mongoose";

const someSchema = new mongoose.Schema({
  name: String,
  // Otros campos y configuraciones del esquema
});

const SomeModel = mongoose.model("SomeModel", someSchema);

export default SomeModel;
