import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = ({ addToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value.length > 2) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            setBooks(response.data.docs);
        } else {
            setBooks([]);
        }
    };

    return (
        <div className="search-box">
            <h1>Search by book name:</h1>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Type book name"
            />
            <div className="search-results">
                {books.map((book) => (
                    <div key={book.key} className="book-card">
                        <h2>Book Title: {book.title}</h2>
                        <p>Edition Count: {book.edition_count}</p>
                        <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
