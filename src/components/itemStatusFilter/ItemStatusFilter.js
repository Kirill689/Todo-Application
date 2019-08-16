import React from 'react';

import './ItemStatusFilterStyle.css';


export default class ItemStatusFilter extends React.Component {


  btt = [
    {name: 'All', label: 'All'},
    {name: 'Done', label: 'Done'},
    {name: 'Active', label: 'Active'}
  ]

  render(){

    const {filter , filterChange} = this.props;

    const buttons = this.btt.map(({name, label})=>{

      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

      return  (
      <button type="button" className={`btn ${clazz}`} key={name} onClick={()=> filterChange(name)}> {label} </button>)
    })



    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  };

};




