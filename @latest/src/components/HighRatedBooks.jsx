//import React from "react";
import Books from "../data/Books";
import BookCard from "../components/BookCard";

const HighRatedBooks = () => {
  const highRatedBooks = Books.filter((book) => book.rating > 4.5);
  return (
    <section>
      <h2>Books with Rating Higher than 4.5</h2>
      <div className="cards-container">
        {highRatedBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
    </div>
    </section>
  );
};

export default HighRatedBooks;