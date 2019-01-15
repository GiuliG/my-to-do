import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
    state = {
        name:"",
        text:"",
    }

handleChange = (e) =>{  
    this.setState({
        [e.target.name]: e.target.value});
    }

handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
        id: shortid.generate(),
        name: this.state.name,
        text: this.state.text, 
        complete: false,  
    });
    this.setState({
        //it does not clean the search bar, to check
        name:"",
        text:"",
    })
  }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.handleSubmit}>
                    <input name="name"  onChange={this.handleChange} placeholder="Name"/>
                    <input name="text"  onChange={this.handleChange} placeholder="Add description"/>
                    <button type="submit" onClick={this.handleSubmit}> Add Task </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;