import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const books = [
    {
      title: 'King of Lion',
      id: 0,
    },
    {
      title: 'Sun Rise',
      id: 1,
    },
    {
      title: 'The Diamond',
      id: 2,
    },
  ];
  return (
    <div>
      <h2 className="booklist-h2">Book List</h2>
      {
        books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))
    }
    </div>
  );
};

export default BookList;
