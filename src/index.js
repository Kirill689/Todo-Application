import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';


const App = ()=> {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Learn React ', important: true,  id: 2},
        {label: 'Make changes on project', important: true,  id: 3},
        {label: 'Commit it', important: true,  id: 4}
    ]

    return (
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter/>
          </div>
    
          <TodoList todos={todoData} />
        </div>
      );
}


ReactDOM.render(<App></App>, document.getElementById('root'));