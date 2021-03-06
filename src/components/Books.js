import React from 'react';
import AddForm from './bookComponents/AddForm';
import BookList from './bookComponents/BookList';

const Books = () => (
  <main>
    <BookList />
    <hr />
    <h2 className="add-book-h2">ADD NEW BOOK</h2>
    <AddForm />
  </main>
);

export default Books;
