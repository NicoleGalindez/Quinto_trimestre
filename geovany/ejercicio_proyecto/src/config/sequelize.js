// config/sequelize.js
import { Sequelize } from "sequelize";

const configureSequelize = () => {
  const sequelizeConnection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "password",
    database: "mydb",
  });

  sequelizeConnection
    .authenticate()
    .then(() => {
      console.log("Conexión a Sequelize establecida");
    })
    .catch((err) => {
      console.error("Error de conexión a Sequelize: " + err);
    });

  return sequelizeConnection;
};

export default configureSequelize ;
