import React, {Component} from "react";

import './SearchPanelStyle.css';


export default class SearchPanel extends Component {


  state = {
    term: ''
  }

  onChangeFilter = (e) => { 
     const term = e.target.value;
     this.setState({term});
     this.props.onChangeFilter(term);
  }


  render(){

    return(

      <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                value={this.state.term}
                onChange={this.onChangeFilter}/>

    );
  }

}




