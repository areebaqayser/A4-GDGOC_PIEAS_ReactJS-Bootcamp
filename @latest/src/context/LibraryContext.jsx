import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const LibraryContext = createContext();

// Create a provider component
export const LibraryProvider = ({ children }) => {
  const [books, setBooks] = useState([]); // Store fetched book data
  const [borrowedBooks, setBorrowedBooks] = useState([]); // Borrowed books state
  const [favBooks, setFavBooks] = useState([]); // Favorite books state

  // Function to fetch book data
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('./books.json'); // Path to the JSON file
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  // Function to borrow a book
  const borrowBook = (title) => {
    setBorrowedBooks((prevBooks) => [...prevBooks, title]);
  };

  // Function to add a book to favorites
  const addToFavorites = (title) => {
    setFavBooks((prevBooks) => [...prevBooks, title]);
  };

  return (
    <LibraryContext.Provider value={{ books, borrowedBooks, favBooks, borrowBook, addToFavorites }}>
      {children}
    </LibraryContext.Provider>
  );
};
