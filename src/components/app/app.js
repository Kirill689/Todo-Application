import React from "react";

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import ItemAddForm from '../itemAddForm';


export default class App extends React.Component {

  maxId = 1000;

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


  addItem = (text)=> {
    
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState (({todoData}) => {
     
      const newTododata = [...todoData, newItem];

      return {
        todoData: newTododata
      }
      
    });

  }

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
          <ItemAddForm
          onAdd={this.addItem}
          />
        </div>
      );
    };
    
};

