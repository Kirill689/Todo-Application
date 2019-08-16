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
     this.createTodoItem('Workout'),
     this.createTodoItem('Dinner'),
     this.createTodoItem('Sleep')
  ],  
    term: '',
    filter: '' 
  };



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


  search(items, term){

    if(term.length===0){
      return items;
    }

    return items.filter((el)=> {  
      return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }


  searchChange = (term) => {
    this.setState({term})
  }



  itemsFilter(items, filter){

    switch(filter){
      case  'All':
        return items;

      case 'Done':
          return items.filter((el)=> el.done);
     
      case 'Active':
          return items.filter((el)=> !el.done);
      default:
        return items;
    }

  }



  filterChange = (filter) => {
    this.setState({filter})
  }




  render(){
    

    const {todoData, term, filter} = this.state;

    const visibleTodos = this.itemsFilter(this.search(todoData, term), filter);
    const doneItems = this.state.todoData.filter((el)=> el.done).length;
    const notDoneItems = this.state.todoData.length - doneItems;

      return (
        <div className="todo-app">
          <AppHeader toDo={notDoneItems} done={doneItems} />
          <div className="search-panel d-flex">
            <SearchPanel  onChangeFilter={this.searchChange}/>
            <ItemStatusFilter filter={filter}
              filterChange={this.filterChange}
            />
          </div>
    
          <TodoList
          todos={visibleTodos}
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

