import React, { useContext } from 'react';
import { AppContext } from '../../state/AppContext';
import ThListSVG from '../SVG/ThListSVG';
import ThSVG from '../SVG/ThSVG';

const ViewTypeToggler = () => {
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

export default ViewTypeToggler;
