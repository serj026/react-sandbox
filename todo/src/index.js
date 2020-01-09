import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const el = (
  <div>
    <h1>My Todo</h1>
    <input placeholder="search" />
    <TodoList />
  </div>
);

ReactDOM.render(el, document.getElementById('root'));
