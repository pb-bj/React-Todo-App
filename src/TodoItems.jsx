const TodoItems = ({ id, title, deleteBtn }) => {
  return (
    <li key={ id } className="todo-list-items">    
        <label>
            <input 
                className="input-checkbox"
                type="checkbox"              
            />
          { title } 
        </label>
        <button className="deleteBtn" onClick={ () => deleteBtn(id) }>
            Delete
        </button>
    </li>
  )
}

export default TodoItems