import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';








const App = ()=> {
    return (
    <div>
        <AppHeader></AppHeader>
        <SearchPanel></SearchPanel>
        <TodoList></TodoList>
    </div>);
}


ReactDOM.render(<App></App>, document.getElementById('root'));