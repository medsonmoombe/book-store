import React from 'react';

const Books = (props)=> {
    const {
    book: {
        title,
        author,
        id,
        category,
    }

    } = props

    return <>
    <li key={id} className="books-content">
    {title}
        {' by '}
        {author}
        {' - '}
        {category}
    </li>
    <button type="button" id={id}></button>
    </>
}