import React, { Component } from 'react';
import shortid from 'shortid';
//import Error from '../helpers/Error';

class Form extends Component {
    state = {
        name: undefined,
        text: undefined,
        error: undefined,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.text]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let date = Date(Date.now());
        if (this.state.name && this.state.text) {
            this.props.onSubmit({
                id: shortid.generate(),
                name: this.state.name,
                text: this.state.text,
                complete: false,
                dateFormat: date.toString().slice(0, 15),
                error: '',
            })
        } else {
            this.setState({
                name: undefined,
                text: undefined,
                error: "please fill fields",
            })
        }
        this.setState({
            //it does not clean the search bar, to check
            name: "",
            text: "",
        })
    }





    render() {

        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.handleSubmit}>
                        <input name="name" onChange={this.handleChange} placeholder="Name" />
                        <input name="text" onChange={this.handleChange} placeholder="Add description" />
                        <button type="submit" onClick={this.handleSubmit} > Add Task </button>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;