import React from 'react';

const Bookshelf = ({ bookshelf }) => {
    return (
        <div className="bookshelf-box">
            <h1>My Bookshelf</h1>
            <div className="bookshelf">
                {bookshelf.map((book, index) => (
                    <div key={index} className="book-card">
                        <h2>Book Title: {book.title}</h2>
                        <p>Edition Count: {book.edition_count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;
