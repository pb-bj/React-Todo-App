import TodoItems from './TodoItems'

const TodoList = ({ todos, deleteBtn }) => {
  return (
   <ul className="todo-list">
    { todos.length === 0 && <p className='not-found-message'>No Item found</p> }
      { todos.map( (todo) => {
        return (
          <TodoItems 
              key={ todo.id }
              id={ todo.id}
              title={ todo.title } // or simpley pass {...todo}
              deleteBtn = { deleteBtn }
          />
        )
     })} 
   </ul>
  )
}

export default TodoList