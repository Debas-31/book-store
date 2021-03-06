import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookApi } from '../../redux/books/books';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);
  return (
    <div>
      {books.length ? (
        books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))
      ) : (
        <h3 className="booklist-h3">The shelf is empty, please add books! </h3>
      )}
    </div>
  );
};

export default BookList;
