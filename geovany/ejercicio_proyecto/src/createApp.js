// createApp.js
import express from "express";
import cors from "cors";
import  configureMongoose  from "./config/mongoose";
import  configureMySQL  from "./config/mysql";
import  configureMySQL2  from "./config/mysql2";
import  configureSequelize  from "./config/sequelize";

const createApp = () => {
  const app = express();

  // Configurar middlewares y opciones de Express
  app.use(express.json());
  app.use(cors());

  // Configurar conexión a la base de datos MongoDB
  configureMongoose();

  // Configurar conexión a la base de datos MySQL
  const mysqlConnection = configureMySQL();

  // Configurar conexión a la base de datos MySQL2
  const mysql2Connection = configureMySQL2();

  // Configurar conexión a la base de datos Sequelize
  const sequelizeConnection = configureSequelize();

  return app;
};

export default createApp;
