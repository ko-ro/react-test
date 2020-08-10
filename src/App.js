import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
    const todos = [
        {
            id: 1,
            completed: false,
            title: 'todo 1'
        },
        {
            id: 2,
            completed: false,
            title: 'todo 2'
        },
        {
            id: 3,
            completed: false,
            title: 'todo 3'
        },
    ];

    return (
        <div className='wrapper'>
            <h1>Todo List</h1>
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
