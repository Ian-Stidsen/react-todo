import React from 'react';

import './stylesheets/app.css';

function App() {
  let todoInput;
  window.addEventListener('load', () => {
    todoInput = document.getElementById('todoInput');
  });

  function addTodo() {

    console.log(todoInput.value);
  };

  return (
    <main>
      <div className='add-todo'>
        <input id='todoInput' type='text' placeholder='Add new todo' />
        <button id='addTodoButton' type='button' onClick={addTodo} />
      </div>
    </main>
  );
}

export default App;
