import React, { useContext } from "react";
import { LibraryContext } from "../context/LibraryContext"; // Import context
import BookCard from "./BookCard"; // Import the BookCard component

const BookList = () => {
  const { books } = useContext(LibraryContext); // Access books from context

  return (
    <section>
      <h2>Book List</h2>
      <div>
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
              genre={book.genre}
            />
          ))
        ) : (
          <p>No books available!</p>
        )}
      </div>
    </section>
  );
};

export default BookList;
