import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import GoogleSearch from './components/search/GoogleSearch';

const App = () => (
  <div className='flex flex-col items-center justify-between h-screen'>
    <Header />
    <GoogleSearch />
    <Footer />
  </div>
);

export default App;
