import React from "react";

import TodoListItem from './TodoListItem';

const TodoList = ()=>{
    return (
        <ul>
        <li><TodoListItem label="Drink coffe"></TodoListItem></li>
        <li><TodoListItem label="Build react App and commit on github" important></TodoListItem></li>
        </ul>
    );
};

export default TodoList;