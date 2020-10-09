import React, { useContext } from 'react';
import { AppContext } from '../../state/AppContext';

const TotalResult = () => {
  // Get data from global app state
  const { totalResults, loading } = useContext(AppContext);
  return (
    <>
      <div className='c-total-result'>
        {!loading && totalResults !== null && totalResults !== 0 && (
          <span className='c-total-result__text'>
            We found
            {totalResults === 1
              ? ` ${totalResults} result for you!`
              : ` ${totalResults} results for you!`}
          </span>
        )}
        {!loading && totalResults === 0 && (
          <span className='c-total-result__text'>
            We did't found any result!
          </span>
        )}
        {totalResults === null && (
          <span className='c-total-result__text'>
            You don't have any results yet!
          </span>
        )}
      </div>
    </>
  );
};

export default TotalResult;
