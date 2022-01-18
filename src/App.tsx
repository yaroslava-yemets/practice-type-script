import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <TodoItem title={'practice tailwind'} />
    </>
  );
}

export default App;
