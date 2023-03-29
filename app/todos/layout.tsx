import TodoList from './TodoList';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-row'>
      <div className='w-1/2'>
        {/* @ts-ignore */}
        <TodoList />
      </div>

      <div className='flex-1'>{children}</div>
    </main>
  );
}
