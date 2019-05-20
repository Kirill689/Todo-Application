import React from 'react';

import './ItemStatusFilterStyle.css';


export default class ItemStatusFilter extends React.Component {

  const = this.props;

  render(){
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info">All</button>
        <button type="button"
                className="btn btn-outline-secondary">Active</button>
        <button type="button"
                className="btn btn-outline-secondary">Done</button>
      </div>
    )
  };

};




