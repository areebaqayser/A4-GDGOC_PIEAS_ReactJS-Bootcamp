import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext'; // Import the context

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(LibraryContext); // Access borrowedBooks from the context

  return (
    <section>
      <h2>Borrowed Books</h2>
      {borrowedBooks.length > 0 ? (
        <ul>
        {borrowedBooks.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
      ) : (
        <p>No borrowed books yet.</p>
      )}
    </section>
  );
};

export default BorrowedBooks;
