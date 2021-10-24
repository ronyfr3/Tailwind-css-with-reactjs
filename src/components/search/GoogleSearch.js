import { MicrophoneIcon, SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import GoogleIcon from '../../images/google.png';

const GoogleSearch = () => {
  return (
    <form className='flex flex-col items-center mt-10 flex-grow w-4/5'>
      <img
        loading='lazy'
        className='h-20 w-50'
        src={GoogleIcon}
        alt='GoogleIcon'
      />
      <div className='flex w-full mt-5 hover:shadow-lg  focus-within:shadow-lg max-w-md rounded-full border border-gray-200 items-center py-3 px-5 sm:max-w-xl lg:max-w-2xl'>
        <SearchIcon className='h-5 mr-3 text-gray-500' />
        <input type='text' className='flex-grow focus:outline-none' />
        <MicrophoneIcon className='h-5 mr-3 text-gray-500' />
      </div>
      <div className='flex space-y-3 w-1/2 flex-col justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
        <button className='btn'>google search</button>
        <button className='btn'>i'm feeling lucky</button>
      </div>
    </form>
  );
};

export default GoogleSearch;
