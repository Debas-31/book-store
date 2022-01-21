import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../../redux/books/books';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const BookItem = (props) => {
  const {
    book: { id, title, category },
  } = props;

  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookApi(id));
  };

  const percentage = 60;

  return (
    <div className="book-container">
      <div className="title-container">
        <h3 className="book-title">{title}</h3>
        <h3 className="book-author">{category}</h3>
        <div className="book-btns">
          <button className="remove-btn" type="button">Comments</button>
          <button className="remove-btn" type="button" onClick={removeBookFromStore}>Remove</button>
          <button className="remove-btn" type="button">Edit</button>
        </div>
      </div>
    </div>
    
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
