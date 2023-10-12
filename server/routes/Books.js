const express = require("express");
const router = express.Router();
const db = require("../connection");

router.get("/", (req, res) => {
    const query = "select * from books";
    db.query(query, (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  });
  
  router.get("/:id", (req, res) => {
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
  
  router.post("/", (req, res) => {
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
  
  router.delete("/:id", (req, res) => {
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
  
  router.put("/:id", (req, res) => {
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

module.exports = router;
