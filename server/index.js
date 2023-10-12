const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const BooksRouter = require("./routes/Books");
app.use("/books", BooksRouter);

app.listen(1234, () => {
  console.log("server is connected to port 1234 !");
});
