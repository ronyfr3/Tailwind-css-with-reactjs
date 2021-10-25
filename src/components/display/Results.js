import React from 'react';
import { useSelector } from 'react-redux';
import { data } from '../../mock/MockData';
import Loading from '../Loading';

const Results = () => {
  const { loading, results } = useSelector((state) => state.searchResults);
  // console.log(data);

  if (loading === 'true') return <Loading />;

  return (
    <div className='p-7 sm:w-4/5 w-full break-words'>
      {results?.total > 0 ? (
        <small className='text-gray-600 text-sm'>
          About {results?.total} results
        </small>
      ) : (
        <small className='text-gray-600 text-sm'>
          About {data?.length} results
        </small>
      )}
      {results?.total > 0 ? (
        <>
          {results?.results?.map((x, i) => {
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
        </>
      ) : (
        <>
          {data.map((x, i) => {
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
        </>
      )}
    </div>
  );
};

export default Results;
