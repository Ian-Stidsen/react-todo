import React, {
  useState
} from 'react';

import { Button, Form, InputGroup } from 'react-bootstrap';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [inputValue, setInputValue] = useState({
    id: 1,
    name: '',
    date: '',
    edit: false
  });

  const [todos, setTodos] = useState([
    {
      id: 0,
      name: 'Todo',
      date: '1111-11-11',
      edit: false
    }
  ]);


  const inputDataHandler = (inputElement) => {
    const elementValue = inputElement.target.value;
    const elementType = inputElement.target.type;

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
    if(inputValue.name.length === 0) {
      alert('Please enter a name');
      return;
    }
    setTodos([...todos, inputValue]);

    setInputValue({
      id: inputValue.id + 1,
      name: '',
      date: '',
      edit: false
    });
  };

  const removeTodo = (todoElement) => {
    const todoId = parseInt(todoElement.target.parentNode.parentNode.id);
    setTodos(prevState => {
      return prevState.filter(todo => {
        return todo.id !== todoId ? todo : null
        
      });
    });
  };


  const editTodo = (todoElement) => {
    const todoId = parseInt(todoElement.target.parentNode.parentNode.id);

    setTodos(prevState => {
      const newState = prevState.map(todo => {
        if (todo.id !== todoId) return todo;
        return {...todo, edit: !todo.edit};
      });
      return newState;

    });
  };


  const updateTodo = (todoElement) => {
    const todoId = parseInt(todoElement.target.parentNode.parentNode.id);
    const todoValue = todoElement.target.value;
    const inputType = todoElement.target.type;

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
    <main className='justify-content-center'>

      <InputGroup className='mb-3 mx-auto' style={{maxWidth: '600px'}}>

        <Form.Control
          className='text-center'
          type='text'
          placeholder='Todo name'
          aria-label='Todo name'
          value={inputValue.name}
          onChange={inputDataHandler}
        />

        <Form.Control
          className='text-center'
          type='date'
          value={inputValue.date}
          onChange={inputDataHandler}
        />

        <Button
          id='addTodoButton'
          onClick={addTodo}
          variant='dark'
        >
          Add Todo
        </Button>

      </InputGroup>

      <ul className='mx-auto' style={{maxWidth: '800px'}}>
        {todos.map(todo => {
          return (
            <li className='mb-2' key={todo.id} id={todo.id}>

              <InputGroup>

                <Button
                  onClick={editTodo}
                  variant='outline-primary'
                >
                  {todo.edit? 'Done' : 'Edit'}
                </Button>

                <Form.Control
                  className='text-center'
                  type='text'
                  readOnly={!todo.edit}
                  value={todo.name}
                  onChange={updateTodo}
                  style={{borderColor: todo.edit? 'blue' : null}}
                />

                {todo.date !== '' || todo.edit? 
                  <Form.Control
                    className='text-center'
                    type='date'
                    readOnly={!todo.edit}
                    value={todo.date}
                    onChange={updateTodo}
                    style={{borderColor: todo.edit? 'blue' : null}}
                  />
                : null }

                <Button
                  className='button'
                  onClick={removeTodo}
                  variant='outline-danger'
                >
                  X
                </Button>

              </InputGroup>

            </li>
          )
        })}
      </ul>

    </main>
  );
}

export default App;
