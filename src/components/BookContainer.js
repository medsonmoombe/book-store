import React from 'react';
import Books from './Books';
 
const AddBook = () => {
    <>
    <div className="add-container">
        <h2>ADD NEW BOOK</h2>
        <form action="#" method="post">
            <input type="text" placeholder="Book Title" />
            <input type="text" placeholder="Book Author" />
            <button type="button">Add Book</button>
        </form>

    </div>
    </>
}

const BookContainer = () => {
    const books = [
        {title: "The demon",
          author: "Micheal",
          id:1,
          category: "Novel"
         },
         {title: "City story",
         author: "Adams",
         id:2,
         category: "Novel"
        }
    ];

    return (
        <div className="main-container">
        <Books book={books} />
        <AddBook />
        </div>
    )
}

export default BookContainer;