import React from "react";

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import ItemAddForm from '../itemAddForm';

import './appStyle.css';

export default class App extends React.Component {


  maxId = 1000;



  state = {
    todoData:[
     this.createTodoItem('Make new commit'),
     this.createTodoItem('Worckout'),
     this.createTodoItem('Dinner'),
     this.createTodoItem('Sleep')
  ]};



  createTodoItem (label){
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  };



  deleteItem = (id)=>{
     this.setState (({todoData}) => {
       const index = todoData.findIndex((el)=> el.id === id);
       
       const newTododata = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

       return {
         todoData: newTododata
       }
       
     });
  };

 

  addItem = (text)=> {
    
    const newItem = this.createTodoItem(text);

    this.setState (({todoData}) => {

      const newTododata = [...todoData, newItem];

      return {todoData: newTododata}
      
    });

  };


  toggleFunc (data, id, toggleProp){

      const i = data.findIndex((el)=>el.id === id)
  
      const oldItem = data[i];
      const newItem = {...oldItem, [toggleProp]: !oldItem[toggleProp]};
     
      return [...data.slice(0, i), newItem, ...data.slice(i + 1)];

  };

  onToggleImportant = (id)=>{

   this.setState(({todoData})=>{
        return {
          todoData: this.toggleFunc(todoData, id, "important")
        };
   });

  };



  onToggleDone = (id)=>{
   
    this.setState(({todoData})=>{
      
      return {
        todoData: this.toggleFunc(todoData, id, "done")
      }
  
      });

  };



  render(){

    const doneItems = this.state.todoData.filter((el)=> el.done).length;
    const notDoneItems = this.state.todoData.length - doneItems;

      return (
        <div className="todo-app">
          <AppHeader toDo={notDoneItems} done={doneItems} />
          <div className="search-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter/>
          </div>
    
          <TodoList
          todos={this.state.todoData}
          onDelete={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          />
          <ItemAddForm
          onAdd={this.addItem}
          />
        </div>
      );
  };
    
};

