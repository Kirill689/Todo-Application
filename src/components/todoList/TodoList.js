import React from "react";

import './TodoListStyle.css';

import TodoListItem from '../todoListItem';

const TodoList = ({todos, onDelete, onToggleImportant, onToggleDone})=>{

    const todoElement = todos.map((item)=> {

        const {id , ...itemProps} = item;

        return(
            <li key={id} className="list-group-item">
                <TodoListItem{...itemProps}
                onDelete={()=> onDelete(id)}
                onToggleImportant={()=> onToggleImportant(id)}
                onToggleDone={()=> onToggleDone(id)}
                />
            </li>
        );
    });


    return (
        <ul className="list-group todo-list">
            {todoElement}
        </ul>
    );
};

export default TodoList; 