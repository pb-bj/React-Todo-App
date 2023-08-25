import { useState, useEffect } from 'react';

import NewTodo from './NewTodo';
import TodoList from './TodoList';
import './style.css';

const App = () => {
  const [ todos, setTodos ] = useState(() => {
    const storedData = localStorage.getItem('item');
        if( storedData !== null) {
          return JSON.parse(storedData);
        } else {
          return[]
        }
  });  

  useEffect(() => {
      localStorage.setItem("item", JSON.stringify(todos));
  }, [todos])

  const newTodoList = (title ) => {
    setTodos( (currentTodos) => {
      return [...currentTodos, 
        { 
          id: crypto.randomUUID(),
          title,
        }];
    })
  }

  const deleteBtn =(id) => {
    setTodos( (currentTodos) => {
      return currentTodos.filter( (currentTodo) => currentTodo.id !== id ) 
    })
  }
 
  return (
    <div className='container'>
      <h2>Today's task..</h2>
      <NewTodo onSubmit = { newTodoList } />
      <TodoList  
          todos={ todos } 
          deleteBtn={ deleteBtn } 
      />
    </div>
  )
}

export default App