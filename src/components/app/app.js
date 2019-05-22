import React from "react";

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';


export default class App extends React.Component {

  state = {
    todoData:[
      {label: 'Drink coffee', important: false, id: 1},
      {label: 'Learn React ', important: true,  id: 2},
      {label: 'Make changes on project', important: true,  id: 3},
      {label: 'Commit it', important: true,  id: 4}
  ]};


  deleteItem = (id)=>{
     this.setState (({todoData}) => {
       const index = todoData.findIndex((el)=> el.id === id);
      
       const beforeIndex = todoData.slice(0, index);
       const afterIndex = todoData.slice(index + 1);
       
       const newTododata = [...beforeIndex, ...afterIndex];

       return {
         todoData: newTododata
       }
       
     });
  };

    render(){

      return (
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter/>
          </div>
    
          <TodoList todos={this.state.todoData}
          onDelete={this.deleteItem} />
        </div>
      );
    };
    
};

