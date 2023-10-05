import React, { useReducer } from 'react';
import { initialsState, todoReducer } from '../reducers/todoReducer';


const Todos = () => {

    const [state,dispatch] =useReducer(todoReducer,initialsState)

    const handleSubmit = (e)=> {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            title: e.target[0].value,
        }
        dispatch({
            type:'ADD_TODO',
            payload: newTodo
        })
        e.target[0].value =''
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='input-group shadow '>
            <input className='form-control' type="text" />
            <button className='btn btn-primary '>Ekle</button>
            <button type='button' onClick={()=>dispatch({
                type:'CLEAR'
            })} className='btn btn-warning '>Sıfırla</button>
        </form>
      <ul className='my-4'>
        {state.todos.map((todo) =>(
            <li key={todo.id} className='d-flex justify-content-between align-items-center my-2 bg-white rounded shadow'>
                <span className='text-black fw-bold ps-3'>{todo.title}</span>
                <button onClick={()=>dispatch({
                    type:'DELETE_TODO',
                    payload: todo.id
                })} className='btn btn-danger'>Sil</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
