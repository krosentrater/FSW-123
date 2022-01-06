

function ToDoList({todoItems}) {

    const list = todoItems;
    console.log(list);

    const newList = list.map((stuff, index) => <li key = {index}>{stuff}</li>)
    console.log(newList)
    return (   
        <h1>
            <ul>{newList}</ul>
        </h1>
    );
}

export default ToDoList;

