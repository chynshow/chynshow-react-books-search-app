import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({
  reference,
  title,
  imageLinks: { smallThumbnail, thumbnail },
  description,
  viewType,
  infoLink,
}) => {
  return (
    <li className={`c-book-item c-book-item--${viewType}`} ref={reference}>
      <img
        className='c-book-item__img'
        src={thumbnail ? thumbnail : smallThumbnail}
        alt='Book cover'
      />
      <h3 className='c-book-item__title'>{title}</h3>
      <p className='c-book-item__description'>
        {description &&
          description.substring(0, viewType === 'one' ? 1000 : 250) + '...'}
      </p>
      <a href={infoLink} rel='noopener noreferrer' target='_blank'>
        <button className='c-btn c-btn--primary c-book-item__btn'>
          Details
        </button>
      </a>
    </li>
  );
};

BookItem.propTypes = {
  reference: PropTypes.func,
  title: PropTypes.string.isRequired,
  smallThumbnail: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  viewType: PropTypes.string.isRequired,
  infoLink: PropTypes.string.isRequired,
};

export default React.memo(BookItem);
