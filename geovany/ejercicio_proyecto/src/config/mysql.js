// config/mysql.js
import mysql from "mysql";

const configureMySQL = () => {
  const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb",
  });

  mysqlConnection.connect((err) => {
    if (err) {
      console.error("Error de conexión a MySQL: " + err);
    } else {
      console.log("Conexión a MySQL establecida");
    }
  });

  return mysqlConnection;
};

export default configureMySQL ;
