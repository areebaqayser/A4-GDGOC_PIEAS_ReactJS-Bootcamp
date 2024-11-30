import React, { useContext } from "react";
import { LibraryContext } from "../context/LibraryContext"; // Import the context
import BookCard from "./BookCard"; // Import BookCard component

const BookDetails = () => {
  const { books } = useContext(LibraryContext); // Access books from context

  return (
    <section>
      <h2>All Books Details</h2>
      <div className="cards-container">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            genre={book.genre}
          />
        ))}
      </div>
    </section>
  );
};

export default BookDetails;
