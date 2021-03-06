import React from 'react';
// import {useState} from 'react';
import './App.css';

const Todo = ({todo, index, completeTodo, removeTodo})=>{
    return (
        <div 
            className="todo"
            style={{textDecoration:todo.isCompleted?"line-through":""}}>
            {todo.text}
            <div>
                <button onClick={()=>completeTodo(index)}>Done</button>
                <button onClick={()=>removeTodo(index)}>Remove</button>
            </div>
        </div>
    )
}

export default Todo;