import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';


const App = ()=> {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Learn React ', important: true,  id: 2},
        {label: 'Make changes on project', important: true,  id: 3},
        {label: 'Commit it', important: true,  id: 4}
    ]

    return (
    <div>
        <AppHeader></AppHeader>
        <SearchPanel></SearchPanel>
        <TodoList todos = {todoData}></TodoList>
    </div>);
}


ReactDOM.render(<App></App>, document.getElementById('root'));