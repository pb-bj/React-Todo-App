import { useState } from 'react'

const NewTodo = ({ onSubmit }) => {
    const [ items, setItems ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
            if( items === '') return // for an empty input
                
        onSubmit( items );
        setItems('');
    }
  return (
    <form className='form-container' onSubmit={ handleSubmit }>
        <div>
            <input 
                type="text"
                id='item'
                value={ items }
                onChange={ (e) => setItems(e.target.value) }
                autoComplete='off'
                placeholder='add some task...'
                className='form-input'
            />
            <button className='btn'>Add Task</button>
        </div>
    </form>
  )
}

export default NewTodo