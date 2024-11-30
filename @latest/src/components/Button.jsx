// src/components/Button.jsx
import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext'; // Import the context

const Button = ({ title }) => {
  const { borrowedBooks, favBooks, borrowBook, addToFavorites } = useContext(LibraryContext); // Access context

  // Event handler for borrowing the book
  const handleBorrow = () => {
    if (!borrowedBooks.includes(title)) {
      borrowBook(title);
    }
  };

  // Event handler for adding the book to favorites
  const handleFavorite = () => {
    if (!favBooks.includes(title)) {
      addToFavorites(title);
    }
  };

  return (
    <div>
      <button onClick={handleBorrow}><b>Add Me</b></button>
      <button onClick={handleFavorite}><b>Favourite</b></button>
    </div>
  );
};

export default Button;
