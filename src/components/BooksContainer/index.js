import React, { useCallback, useContext, useRef } from 'react';
import { AppContext } from '../../state/AppContext';
import BookItem from '../BookItem';
import ThSVG from './../SVG/ThSVG';
import ThListSVG from './../SVG/ThListSVG';
import Loader from './../Loader';

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
    viewType,
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
      {books.length > 3 && <ViewType />}
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
                  viewType={viewType}
                  infoLink={volumeInfo.infoLink}
                />
              );
            } else {
              return (
                <BookItem
                  key={id}
                  title={volumeInfo.title}
                  imageLinks={volumeInfo.imageLinks}
                  description={volumeInfo.description}
                  viewType={viewType}
                  infoLink={volumeInfo.infoLink}
                />
              );
            }
          }
        })
      }
      {loading && <Loader />}
    </ul>
  );
};

export default BooksContainer;

const ViewType = () => {
  const { setView } = useContext(AppContext);
  return (
    <div className='c-view-type'>
      <button
        className='c-btn c-btn--primary c-view-type__btn'
        onClick={() => setView('one')}
      >
        <ThListSVG />
      </button>
      <button
        className='c-btn c-btn--primary c-view-type__btn'
        onClick={() => setView('four')}
      >
        <ThSVG />
      </button>
    </div>
  );
};
