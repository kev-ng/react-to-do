import React from 'react';
import {useState} from 'react';
import Todo from './Todo'
import './App.css';


function TodoForm({addTodo}){
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value = {value}
        onChange={e=>setValue(e.target.value)}
        />
    </form>
  )

}

function App() {
   const [todos,setTodos]=useState([
     {text:"Learn react",isCompleted:false},
     {text: "Meet friends for lunch",isCompleted:false},
     {text: "be cool",isCompleted:false}
   ]);

   const addTodo = text=>{
     const newTodos=[...todos,{text}];
     setTodos(newTodos);
   };

   const completeTodo = index =>{
     const newTodos = [...todos];
     newTodos[index].isCompleted = !newTodos[index].isCompleted;
     setTodos(newTodos);
   }

   const removeTodo = index =>{
     const newTodos = [...todos];
     newTodos.splice(index,1);
     setTodos(newTodos);
   };


  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>

  );
}

export default App;
