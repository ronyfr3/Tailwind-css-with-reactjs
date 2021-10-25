import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const Results = () => {
  const { loading, results } = useSelector((state) => state.searchResults);
  // console.log(results);
  if (loading === 'true') return <Loading />;

  return (
    <div className='p-8 sm:w-4/5'>
      <small className='text-gray-600 text-sm'>
        About {results?.total ? results?.total : 100} results
      </small>
      {results?.results?.map((x,i) => {
        return (
          <div className='mt-6 sm:w-2/3' key={i}>
            <p className='text-sm text-gray-800'>
              <b>Ad</b> {x.link}
            </p>
            <a href={x.link}>
              <h1 className='text-blue-900 cursor-pointer font-medium text-xl mb-1'>
                {x.title}
              </h1>
            </a>
            <p className='text-gray-700 text-justify text-base'>
              {x.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
