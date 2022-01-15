import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import { todo } from './Store';

function App() {
  // Creates variable that stores array of todos.
  const [todos, setTodos] = useState({todo}); 

  const completeTodo = (id) => {
    // Makes copy of existing array.
    let newTodoList = [...todos];
    // Grabs id of items, sets isComplete to true.
    if (newTodoList.id == id){
      newTodoList.isComplete = !true;
    };
    setTodos(newTodoList);
  };

  const deleteTodo = (id) => {
    // Copy of existing array.
    let newTodoList2 = [...todos];
    // Filter copy for IDs. If id is not == to idx, return id
    newTodoList2.filter((idx) => {
      if (id !== idx){
        return ;
      };
    });
    setTodos(newTodoList2);
  };

  return (
    <>
      <ToDoList todos = {todos.todo} complete = {completeTodo} delet = {deleteTodo}/>

    </>
  );
}

export default App;
