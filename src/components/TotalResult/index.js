import React, { useContext } from 'react';
import { AppContext } from '../../state/AppContext';

const TotalResult = () => {
  // Get data from global app state
  const { totalResults, loading } = useContext(AppContext);
  return (
    <>
      <div>
        {!loading && totalResults !== null && (
          <span>
            We found{' '}
            {totalResults > 1
              ? `${totalResults} results for you!`
              : `${totalResults} result for you!`}
          </span>
        )}

        {totalResults === null && (
          <span>You don't have any books yet! Start search!</span>
        )}
      </div>
    </>
  );
};

export default TotalResult;
