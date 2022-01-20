import React, { useState } from 'react';

function TodoForm({ add }) {

    // Creates state variables that store user input. 
    const [input, setInput] = useState('');

    // Gets user input from form.
    const getUserInput = (input) => {
        setInput(input.currentTarget.value);
    };

    const submit = (sub) => {
        // Prevents page refresh on submit button.
        sub.preventDefault();
        // Runs input from user through addTodo function in App.js.
        add(input);
        // Resets form without refresh.
        setInput('');
        
    }


    return (
        <>
            <form onSubmit = {submit}>
                <input className = 'input-field' value = {input} type = 'text' onChange = {getUserInput} placeholder = 'Add tasks...' required></input>
                <button className = 'submit-button'>Submit</button>
            </form>
        </>
    );
}

export default TodoForm;