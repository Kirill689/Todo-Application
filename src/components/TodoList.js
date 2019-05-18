import React from "react";

import './TodoListStyle.css';

import TodoListItem from './TodoListItem';

const TodoList = ({todos})=>{

    const todoElement = todos.map((item)=> {

        const {id , ...itemProps} = item;

        return(
            <li key={id} className="list-group-item">
                <TodoListItem{...itemProps}/>
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