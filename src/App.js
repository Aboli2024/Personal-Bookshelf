import React, { useState } from 'react';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import './App.css';

function App() {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <div className="App">
      <div className="container">
        <BookSearch addToBookshelf={addToBookshelf} />
        <Bookshelf bookshelf={bookshelf} />
      </div>
    </div>
  );
}

export default App;
