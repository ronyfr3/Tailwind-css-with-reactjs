import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import profile from '../../images/profile.jpg';

const Header = () => (
  <header className='flex p-4 items-center justify-end text-sm text-gray-800 w-full'>
    <div className='flex space-x-4 items-center'>
      <p className='link'>Gmail</p>
      <p className='link'>Images</p>
      <CgMenuGridO className='h-10 p-2 w-10 cursor-pointer rounded-full hover:bg-gray-100 text-gray-500' />
      <img
        loading='lazy'
        className='h-10 cursor-pointer rounded-full'
        src={profile}
        alt='profile pic'
      />
    </div>
  </header>
);

export default Header;
