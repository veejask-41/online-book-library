const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "KSajeev@5",
  database: "online-book-library",
});

app.get("/", (req, res) => {
  res.json("this is home route in backend");
});

app.get("/books", (req, res) => {
  const query = "select * from books";
  db.query(query, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query = `select * from books where id = ${bookId}`;
  db.query(query, (err, data) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(data);
    }
  });
});

app.post("/books", (req, res) => {
  const query =
    "insert into books (`title`,`description`,`cover`) values (?,?,?)";
  const values = [req.body.title, req.body.description, req.body.cover];
  db.query(query, values, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json("book successfully added");
    }
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query = "delete from books where id = ?";
  db.query(query, [bookId], (err, data) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json("book deleted successfully");
    }
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query =
    "update books set `title` = ?, `description` = ?, `cover` = ? where id = ?";
  db.query(
    query,
    [req.body.title, req.body.description, req.body.cover, bookId],
    (err, data) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json("book updated successfully");
      }
    }
  );
});

app.listen(1234, () => {
  console.log("server is connected to port 1234 !");
});
