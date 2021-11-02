import React from 'react';

const BooksPage = () => (
  <>
    <div className="books-container d-flex">
      <h2>List of Book</h2>
      <button type="button">Remove</button>
    </div>
    <input type="text" name="addBooks" placeholder="Title" />
    <button type="button">Add Book</button>
  </>
);

export default BooksPage;
