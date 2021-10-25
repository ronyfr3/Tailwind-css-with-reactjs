import React from 'react';

const SearchInput = ({search,setSearch}) => (
  <>
    <input
      type='text'
      autoComplete="off"
      name='search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='bg-white focus:outline-none w-full'
    />
  </>
);

export default SearchInput;
