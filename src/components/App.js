import React from 'react';
import Header from './header';
import TodoList from './todo-list';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
