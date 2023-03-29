'use client';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
const Search = () => {
  const [search, setsearch] = useState('');
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setsearch('');
    router.push(`/search/${search}`);
  };
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          className='focus:outline-none'
          type='text'
          value={search}
          placeholder='Enter the Search term ...'
          onChange={(e) => setsearch(e.target.value)}
        />

        <button
          type='submit'
          className='btn bg-green-500 px-4 py-2 ml-2 rounded-2xl text-white'
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
