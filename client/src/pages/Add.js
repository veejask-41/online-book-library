import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Add() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
  });

  const handleChange = (e) => {
    setBook((prevBook) => ({
      ...prevBook,
      [e.target.name]: e.target.value,
    }));
  };

  const addBook = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1234/books", book);
      if (res.error) {
        console.log(res.error);
      }
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  return (
    <div className="addBookForm">
      <input
        type="text"
        placeholder="title"
        name="title"
        value={book.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        value={book.description}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        value={book.cover}
        onChange={handleChange}
      />
      <button onClick={addBook}>Add Book</button>
    </div>
  );
}

export default Add;
