import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import getSearchResults from '../api/SearchApi';
import Results from '../components/display/Results';
import Header from '../components/results/Header';

const Service = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  useEffect(() => {
    dispatch(getSearchResults());
  }, [dispatch, location]);

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Header />
      <Results/>
    </div>
  );
};
export default Service;
