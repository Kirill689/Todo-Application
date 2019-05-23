import React from "react";

export default class ItemAddForm extends React.Component {

    render(){
       
        return(
            <div className="ItemAddForm">
                <button className="btb btn-outline-secondary"
                onClick={()=>this.props.onAdd("hello")}>Add Item</button>
            </div>
        )
    }
}

