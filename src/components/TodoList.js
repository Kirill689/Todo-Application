import React from "react";

import TodoListItem from './TodoListItem';

const TodoList = ()=>{
    return (
        <ul>
        <li><TodoListItem></TodoListItem></li>
        <li><TodoListItem></TodoListItem></li>
        </ul>
    );
};

export default TodoList;