import { Todo } from '@/typings';
import React from 'react';
import { notFound } from 'next/navigation';
interface todoParams {
  params: { todoId: string };
}

export const dynamicParams = true;
const fetchTodo = async (todoid: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoid}`,
    { next: { revalidate: 40 } }
  );
  const todo: Todo = await res.json();
  return todo;
};
const page = async (props: todoParams) => {
  const todo = await fetchTodo(props.params.todoId);
  if (!todo.id) return notFound();
  return (
    <div className='bg-orange-400 p-10 m-2 shadow-lg'>
      <h1 className='font-bold'>{`Title : ${todo.title}`}</h1>
      <h2>{`Completed : ${todo.completed ? 'Yes' : 'No'}`}</h2>
      <p>{`By User ${todo.userId}`}</p>
      <p>{`Todo Id : ${todo.id}`}</p>
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  const todos: Todo[] = await res.json();
  const trimmedTodos = todos.slice(0, 10);
  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
