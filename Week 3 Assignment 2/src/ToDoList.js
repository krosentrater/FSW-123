import Todo from './Todo';

function ToDoList({todos, complete, delet}) {

    return (  
        <>
            <Todo todos = {todos} complete = {complete} delet = {delet} />
        </>
    );
}

export default ToDoList;

