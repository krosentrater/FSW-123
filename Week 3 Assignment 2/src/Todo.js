import React from "react";
import { todo } from "./Store";

function Todo({todos, complete, delet}) {


    const todoLists = todos.map((todo) => (
        <React.Fragment>
            <div className = 'divWrapper'>
            <input onClick = {complete} className = 'checkbox' type = 'checkbox'></input>
            <div className = 'listDiv'>{todo.text}</div>
            <button className = 'deleteButton' onClick = {delet}>X</button>
            </div>
        </React.Fragment>
    ))

    return (

        <>
            <h1>List of Todos:</h1>
            {todoLists}
        </>

    );
};

export default Todo;
