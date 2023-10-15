import React, { useState, useEffect } from 'react';
import './Form.css';

function Form() {
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of books from the server when the component mounts
    fetch('${process.env.REACT_APP_API_URL}/cats')
      .then((response) => response.json())
      .then((setCats) => {
        setBooks(setCats);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('${process.env.REACT_APP_API_URL}/cats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book added:', data);

        // Update the UI: Add the new book to the list of books
        setBooks([...books, data]);

        // Clear the form
        setNewBook({ title: '', author: '' });
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <div>
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <hr />
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
