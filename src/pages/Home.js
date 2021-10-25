import React from 'react';
import Header from '../components/header/Header';
import GoogleSearch from '../components/search/GoogleSearch';

const Home = () => (
  <div className='w-full flex flex-col items-center justify-center'>
    <Header />
    <GoogleSearch />
  </div>
);

export default Home;
