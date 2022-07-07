import React from 'react'
import Todo from './Todo'

const todos = (props) => {
  return (
    <div className='todos-list'>
      {props.todos.map((todo) => {
        return(
         <Todo 
            todo = {todo} 
            key = {todo.id} 
            changeTodoCompletion = {props.changeTodoCompletion}
            deleteTodo = {props.deleteTodo}
            editTodo = {props.editTodo}
            />
        );
      })}
      {props.todos.length === 0 ?(
        <h3 className="no-todos">No tasks to do</h3>
      ) : null}
    </div>
  )
}

export default todos