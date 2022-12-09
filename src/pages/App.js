import React, {
  useState
} from 'react';

import './app.css';

function App() {

  const [inputValue, setInputValue] = useState({
    id: 1,
    name: '',
    date: '',
    readOnly: true,
    edit: 'Edit'
  });

  const [todos, setTodos] = useState([
    {
      id: 0,
      name: 'Todo',
      date: '1111-11-11',
      readOnly: true,
      edit: 'Edit'
    }
  ]);


  const inputDataHandler = (e) => {
    const elementValue = e.target.value;
    const elementType = e.target.type;

    switch(elementType) {
      case 'text':
        setInputValue(prevState => (
          {...prevState, name: elementValue}
        ));
        break;

      case 'date':
        setInputValue(prevState => (
          {...prevState, date: elementValue}
        ));
        break;

      default:
        break;
    }
  };


  const addTodo = () => {
    if(inputValue.name.length === 0) return;
    setTodos([...todos, inputValue]);

    setInputValue({
      id: inputValue.id + 1,
      name: '',
      date: '',
      readOnly: true,
      edit: 'Edit'
    });
  };


  const removeTodo = (e) => {
    const todoId = parseInt(e.target.parentNode.id);
    setTodos(prevState => {
      return prevState.filter(todo => {
        return todo.id !== todoId ? todo : null
        
      });
    });
  };


  const editTodo = (e) => {
    const todoId = parseInt(e.target.parentNode.id);

    setTodos(prevState => {
      const newState = prevState.map(todo => {
        if (todo.id !== todoId) return todo;
        if (todo.edit === 'Edit') return {...todo, readOnly: false, edit: 'Done'};
        return {...todo, readOnly: true, edit: 'Edit'};

      });
      return newState;

    });
  };


  const updateTodo = (e) => {
    const todoId = parseInt(e.target.parentNode.id);
    const todoValue = e.target.value;
    const inputType = e.target.type;
    setTodos(prevState => {
      const newState = prevState.map(todo => {
        if (todo.id!== todoId) return todo;
        if(inputType === 'date') return {...todo, date: todoValue};
        return {...todo, name: todoValue};
      });
      return newState;

    });
  };


  return (
    <main>
      <div className='add-todo'>
        <input autoFocus className='add-todo-name' id='todoInput' type='text' placeholder='Add new todo' value={inputValue.name} onChange={inputDataHandler}/>
        <input className='add-todo-date' id='todoDate' type='date' value={inputValue.date} onChange={inputDataHandler}></input>
        <button className='add-todo-btn' id='addTodoButton' type='button' onClick={addTodo}>Add</button>
      </div>
      <ul className='todo-list'>
        {todos.map(todo => {
          return (
            <li className='todo' key={todo.id} id={todo.id}>
              <input className='todo-name' readOnly={todo.readOnly} type='text' value={todo.name}  onChange={updateTodo} />
              <input className='todo-date' readOnly={todo.readOnly} type='date' value={todo.date}  onChange={updateTodo} />
              <button className='todo-edit-btn' onClick={editTodo}>{todo.edit}</button>
              <button className='todo-complete-btn' onClick={removeTodo}>Complete</button>
            </li>
          )
        })}
      </ul>
    </main>
  );
}

export default App;
