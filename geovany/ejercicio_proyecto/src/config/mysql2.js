// config/mysql2.js
import mysql2 from "mysql2";

const configureMySQL2 = () => {
  const mysql2Connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb",
  });

  mysql2Connection.connect((err) => {
    if (err) {
      console.error("Error de conexión a MySQL2: " + err);
    } else {
      console.log("Conexión a MySQL2 establecida");
    }
  });

  return mysql2Connection;
};

export default configureMySQL2 ;
