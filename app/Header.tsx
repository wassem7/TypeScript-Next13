import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='bg-green-600 p-3'>
      <Link className='bg-white p-2 rounded-2xl' href='/'>
        Home
      </Link>
    </div>
  );
};

export default Header;
