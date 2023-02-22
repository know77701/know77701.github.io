import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "book",
  password: "booktest",
  database: "book_db",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const selectQuery = "SELECT * FROM books";
  db.query(selectQuery, (err, data) => {
    if (err) return res.json(err);
    console.log(req);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const insertQuery =
    "INSERT INTO books(`title`,`desc`,`cover`,`price`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];

  db.query(insertQuery, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json("book has been");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const deleteQuery = "DELETE FROM books WHERE id = ?";

  db.query(deleteQuery, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json("book delete");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const updateQuery =
    "UPDATE books SET `title`= ? , `desc`= ? , `price`= ?,`cover`= ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];
  db.query(updateQuery, [...values, bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("apt 11$");
});
