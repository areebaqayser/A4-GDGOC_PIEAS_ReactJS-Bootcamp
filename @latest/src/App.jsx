import React from "react";
import "./App.css"; // Import the CSS
import HighRatedBooks from "./components/HighRatedBooks";
import BookDetails from "./components/BookDetails";
import FictionBooks from "./components/FictionBooks";
import BookAuthors from "./components/BookAuthors";
import BorrowedBooks from './components/BorrowedBooks';
import FavBooks from './components/FavBooks';
import { LibraryProvider } from './context/LibraryContext'; // Import the LibraryProvider
import BookList from "./components/BookList"; // Import the BookList component

const App = () => {
  return (
    <LibraryProvider>
      <div>
        <h1>Library Manager</h1>
        <HighRatedBooks />
        <BookDetails />
        <FictionBooks />
        <BookAuthors />
        <BorrowedBooks />
        <FavBooks />
        <BookList />
      </div>
    </LibraryProvider>
  );
};

export default App;
