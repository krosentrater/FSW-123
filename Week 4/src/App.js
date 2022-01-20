import React, { useDebugValue, useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import todo from './Store';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  // Creates state variable that stores array of todos as default. Import todo array from Store.js
  const [toDos, setTodos] = useState(todo); 

  const completeTodo = (id) => {
    // Copies array of tasks.
    let copyArray1 = [...toDos];

    const findMatchingId = copyArray1.find((task) => task.id === id);
    findMatchingId.isCompleted = !findMatchingId.isCompleted;

    setTodos(copyArray1);
  };

  const deleteTodo = (id) => {
    // Copies array of tasks.
    let copyArray2 = [...toDos];
    // Filters through copied array to see if ids DO NOT match. Returns it.
    let deleteTask = copyArray2.filter((task) => task.id !== id);
    setTodos(deleteTask);
  };

  const addTodo = (input) => {
    // Copies array of tasks.
    let copyArray3 = [...toDos];
    // Pushes new item into array. Adds id with uuid, text as input, isComplete false.
    copyArray3.push({
      id: uuidv4(),
      text: input,
      isCompleted: ''
    });
    // Adds to state of setTodos with other tasks.
    setTodos(copyArray3);
  };


  return (
    // Renders ToDoList component (imported). ToDoList component gets prop passed to it (state default array). Also passes complete and delete function
    <>
      <h1>To do list:</h1>
      <TodoForm add = {addTodo}/>
      <ToDoList toDoList = {toDos} comp = {completeTodo} del = {deleteTodo}/>
    </>
  );
}

export default App;
