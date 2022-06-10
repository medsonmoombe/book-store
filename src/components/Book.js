import React from 'react';
import Books from './Books';
import PropTypes from 'prop-types';


const BookContent = ({ books }) => (
  <ul className="book-content"> 
{ 
books.map((book)=> <Books key={book.id} book={book} />)
}
  </ul>


)
BookContent.propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  export default BookContent;