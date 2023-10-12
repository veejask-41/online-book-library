const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "KSajeev@5",
  database: "online-book-library",
});

app.listen(1234, () => {
  console.log("server is connected to port 1234 !");
});
