import React from 'react';

const Footer = () => (
  <div className='w-full flex flex-col sm:flex-row items-center justify-between p-5 bg-gray-200'>
    <ul className='flex items-center mb-5 sm:mb-0'>
        <li className='link px-3 text-sm capitalize text-gray-500'>About</li>
        <li className='link px-3 text-sm capitalize text-gray-500'>advertising</li>
        <li className='link px-3 text-sm capitalize text-gray-500'>Business</li>
        <li className='link px-3 text-sm capitalize text-gray-500 whitespace-nowrap'>How search works</li>
    </ul>
    <ul className='flex items-center'>
        <li className='link px-3 text-sm capitalize text-gray-500'>privacy</li>
        <li className='link px-3 text-sm capitalize text-gray-500'>terms</li>
        <li className='link px-3 text-sm capitalize text-gray-500'>settings</li>
    </ul>
  </div>
);

export default Footer;
