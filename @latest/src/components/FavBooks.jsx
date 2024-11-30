// src/components/FavBooks.jsx
import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext'; // Import the context

const FavBooks = () => {
  const { favBooks } = useContext(LibraryContext); // Access favBooks from the context

  return (
    <section>
      <h2>Favourite Books</h2>
      {favBooks.length > 0 ? (
         <ul>
         {favBooks.map((book, index) => (
           <li key={index}>{book}</li>
         ))}
       </ul>
      ) : (
        <p>No fav books yet.</p>
      )}
    </section>
  );
};

export default FavBooks;
