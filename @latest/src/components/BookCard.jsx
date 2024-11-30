import React, { useContext } from "react";
import { LibraryContext } from "../context/LibraryContext"; // Import the context

const BookCard = ({ title, author, rating, genre }) => {
  const { borrowBook, addToFavorites } = useContext(LibraryContext); // Access context functions

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <button onClick={() => borrowBook(title)}>Add Me</button>
      <button onClick={() => addToFavorites(title)}>Favorite</button>
    </div>
  );
};

export default BookCard;
