import React, { useState, useEffect } from 'react';
import './Catalog.css';

function Catalog() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the Google Books API
    fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Book Catalog</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors && `Author(s): ${book.volumeInfo.authors.join(', ')}`}</p>
            <p>{book.volumeInfo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
