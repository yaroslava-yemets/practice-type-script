import React from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello tailwindcss!
      </h1>
      <TodoItem title={'practice tailwind'} />
    </>
  );
}

export default App;
