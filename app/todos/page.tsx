import React from 'react';
import TodoList from './TodoList';

const page = () => {
  return (
    <div>
      <h1 className='text-3xl text-gray-400 mt-3'>Todos</h1>
      {/* @ts-ignore */}
      <TodoList />
    </div>
  );
};

export default page;
