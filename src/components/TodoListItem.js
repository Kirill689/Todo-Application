import React from 'react';

const TodoListItem = ({label, important = false}) => {

    const spanStyle = {
        color: important ? 'tomato' : 'balck'
    }

    return <span style = {spanStyle}>{label}</span>;
}

export default TodoListItem;