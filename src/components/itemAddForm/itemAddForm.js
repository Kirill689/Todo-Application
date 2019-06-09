import React from "react";

import './itemAddFormStyle.css';

export default class ItemAddForm extends React.Component {

    state = {
        label: ""
    };



    onChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };



    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label:''
        })
    };



    render(){
       
        return(
            <form className="ItemAddForm d-flex" onSubmit={this.onSubmit}>
            
                <input 
                type="text" 
                className="form-control" 
                placeholder="I need to do..." 
                onChange={this.onChange} 
                value={this.state.label}/>

                <button className="btn btn-outline-secondary">Add</button>
            </form>
        )
    }
};

