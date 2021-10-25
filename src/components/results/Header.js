import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import GooglePic from '../../images/google.png';
import profile from '../../images/profile.png';

const Header = () => {
  return (
    <div className='flex p-5 items-center justify-between w-full border shadow-sm'>
      <div className='flex items-center justify-center flex-1'>
        <form className='flex items-center flex-grow'>
          <img
            src={GooglePic}
            alt='google icon'
            className='h-7 mr-4 sm:mr-5 sm:h-10 cursor-pointer'
          />
          <div className='flex bg-white mr-4 flex-grow focus-within:shadow-md rounded-full border border-gray-200 items-center px-3 py-2'>
            <input type='text' className='focus:outline-none flex-grow' />
            <SearchIcon className='h-4 mr-2.5 sm:mr-3 text-blue-400' />
          </div>{' '}
        </form>
      </div>
      <div className='flex items-center justify-end w-2/6'>
        <FiSettings className='h-5 p-0 w-10 sm:h-10 sm:p-2 sm:w-10 cursor-pointer rounded-full hover:bg-gray-100 text-gray-700' />
        <CgMenuGridO className='h-5 p-0 w-10 sm:h-10 sm:p-2 sm:w-10 cursor-pointer rounded-full hover:bg-gray-100 text-gray-500' />
        <img
          loading='lazy'
          className='h-8 m-0 p-0 sm:h-10 cursor-pointer rounded-full'
          src={profile}
          alt='profile pic'
        />
      </div>
    </div>
  );
};

export default Header;
