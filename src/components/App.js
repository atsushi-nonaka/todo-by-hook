import React from 'react';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './todo-list';

const App = () =>{
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
