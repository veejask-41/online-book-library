import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    id: 0,
    title: "",
    description: "",
    cover: "",
  });

  useEffect(() => {
    const getBookById = async () => {
      try {
        const res = await axios.get(`http://localhost:1234/books/${id}`);
        if (res.error) {
          console.log(res.error);
        } else {
          setBook(res.data[0]);
          // setBook(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getBookById();
  }, [id]);

  const handleChange = (e) => {
    setBook((prevBook) => ({
      ...prevBook,
      [e.target.name]: e.target.value,
    }));
  };

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:1234/books/${id}`, book);
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
        placeholder={book.title}
        name="title"
        value={book.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder={book.description}
        name="description"
        value={book.description}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder={book.cover}
        name="cover"
        value={book.cover}
        onChange={handleChange}
      />
      <button onClick={updateBook}>Update Book</button>
    </div>
  );
}

export default Update;
