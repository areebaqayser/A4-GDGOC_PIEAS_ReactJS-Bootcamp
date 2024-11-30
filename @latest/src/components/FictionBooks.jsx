//import React from "react";
import Books from "../data/Books";
import BookCard from "../components/BookCard";

const FictionBooks = () => {
  const fictionBooks = Books.filter((book) => book.genre === "fiction");
  return (
    <section>
      <h2>Fiction Books</h2>
      <div className="cards-container">

      {fictionBooks.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
    </section>
  );
};

export default FictionBooks;