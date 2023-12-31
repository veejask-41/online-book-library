import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:1234/books");
        // console.log(res.data);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllBooks();
  }, []);

  const deleteBook = async (bookId) => {
    try {
      const res = await axios.delete(`http://localhost:1234/books/${bookId}`);
      if (res.error) {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <div className="Home">
      <div className="books">
        {books.map((book) => {
          return (
            <div className="book" key={book.id}>
              {book.cover && <img src={book.cover} alt={book.cover} />}
              <h2 className="bookTitle">{book.title}</h2>
              <p className="bookDescription">{book.description}</p>
              <button>
                <Link to={`/update/${book.id}`}>Update Book</Link>
              </button>
              <button
                onClick={() => {
                  deleteBook(book.id);
                }}
              >
                Delete Book
              </button>
            </div>
          );
        })}
      </div>
      <button>
        <Link to={"/add"}>Add Book</Link>
      </button>
    </div>
  );
}

export default Home;
