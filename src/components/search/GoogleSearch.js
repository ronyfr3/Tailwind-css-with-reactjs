import { SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GoogleIcon from '../../images/google.png';
import { addQueryString } from '../../redux/queryReducer';
import SearchInput from '../searchInput/SearchInput';

const GoogleSearch = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(addQueryString(search));
    history.push('/service');
  };
  return (
    <form className='flex flex-col items-center mt-10 flex-grow w-4/5'>
      <img
        loading='lazy'
        className='h-20 w-50'
        src={GoogleIcon}
        alt='GoogleIcon'
      />
      <div className='flex relative mt-5 hover:shadow-lg  focus-within:shadow-lg rounded-full border border-gray-200 items-center px-3 py-2 sm:w-3/6 w-full'>
        <SearchIcon className='h-4 mr-2.5 sm:mr-3 text-gray-400 cursor-pointer' />
        <SearchInput search={search} setSearch={setSearch}/>
      </div>
      <div className='flex w-full justify-center mt-8 flex-row space-x-4'>
        <button className='btn px-3 py-2' onClick={handleSearch}>
          google search
        </button>
        <button className='btn px-3 py-2'>i'm feeling lucky</button>
      </div>
    </form>
  );
};

export default GoogleSearch;
