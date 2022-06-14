import React from 'react';
import BookContent from './Book';
import AddBook from './AddBook';
import { useSelector } from 'react-redux';

const BookContainer = () => {
  const infor = useSelector((state) => state.bookReducer);
  const books = infor;
  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
