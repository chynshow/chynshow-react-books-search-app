import React, { useCallback, useContext, useRef } from 'react';
import { AppContext } from '../../state/AppContext';
import BookItem from '../BookItem';
import TotalResult from '../TotalResult';

const BooksContainer = () => {
  const {
    books,
    loading,
    startIndex,
    maxResults,
    totalResults,
    fetchBooks,
    searchParams,
    setStartIndex,
  } = useContext(AppContext);

  // Load new items based on position of last item in the list and "totalResults" parameter
  const observer = useRef();
  const lastBookElRef = useCallback(
    (el) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          startIndex + maxResults < totalResults
        ) {
          setStartIndex();
          fetchBooks(searchParams, startIndex, maxResults);
        }
      });
      if (el) observer.current.observe(el);
    },
    [
      loading,
      searchParams,
      startIndex,
      maxResults,
      totalResults,
      setStartIndex,
      fetchBooks,
    ]
  );

  return (
    <ul className='l-book-container'>
      <TotalResult />
      {
        // eslint-disable-next-line array-callback-return
        books.map(({ volumeInfo, id }, idx) => {
          if (volumeInfo && volumeInfo.imageLinks) {
            if (books.length === idx + 1) {
              return (
                <BookItem
                  title={volumeInfo.title}
                  imageLinks={volumeInfo.imageLinks}
                  description={volumeInfo.description}
                  key={id}
                  reference={lastBookElRef}
                />
              );
            } else {
              return (
                <BookItem
                  key={id}
                  title={volumeInfo.title}
                  imageLinks={volumeInfo.imageLinks}
                  description={volumeInfo.description}
                />
              );
            }
          }
        })
      }
      {loading && <div className='c-loader'>Loading...</div>}
    </ul>
  );
};

export default BooksContainer;
