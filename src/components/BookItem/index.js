import React from 'react';

const BookItem = ({
  reference,
  title,
  imageLinks: { smallThumbnail },
  description,
}) => {
  return (
    <li className='c-book-item' ref={reference}>
      <img src={smallThumbnail} alt='Book cover' />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default BookItem;
