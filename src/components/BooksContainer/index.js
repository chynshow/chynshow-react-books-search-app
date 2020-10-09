import React, { useCallback, useContext, useRef } from 'react';
import { AppContext } from '../../state/AppContext';
import BookItem from '../BookItem';
import Loader from './../Loader';
import ViewTypeToggler from '../ViewTypeToggler';
import ScrollToTop from 'react-scroll-up';
import ChevronUpSVG from './../SVG/ChevronUpSVG';

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
          console.log(startIndex + maxResults, totalResults);
          setStartIndex(startIndex + maxResults);
          fetchBooks(searchParams, startIndex, maxResults);
        }
      });
      if (el) observer.current.observe(el);
    },
    [
      loading,
      startIndex,
      maxResults,
      totalResults,
      setStartIndex,
      fetchBooks,
      searchParams,
    ]
  );

  return (
    <ul className='l-book-container'>
      {books.length > 3 && <ViewTypeToggler />}
      {
        // eslint-disable-next-line array-callback-return
        books.map((b, idx) => {
          const imageLinks = b.volumeInfo.imageLinks
            ? b.volumeInfo.imageLinks
            : '';
          if (books.length === idx + 1) {
            return (
              <BookItem
                title={b.volumeInfo.title}
                imageLinks={imageLinks}
                description={b.volumeInfo.description}
                key={b.id}
                reference={lastBookElRef}
                viewType={viewType}
                infoLink={b.volumeInfo.infoLink}
              />
            );
          } else {
            return (
              <BookItem
                key={b.id}
                title={b.volumeInfo.title}
                imageLinks={imageLinks}
                description={b.volumeInfo.description}
                viewType={viewType}
                infoLink={b.volumeInfo.infoLink}
              />
            );
          }
        })
      }
      {loading && <Loader />}
      <ScrollToTop showUnder={160}>
        <button className='c-btn c-btn--primary c-scroll-btn'>
          <ChevronUpSVG />
        </button>
      </ScrollToTop>
    </ul>
  );
};

export default BooksContainer;
