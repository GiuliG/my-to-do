'Use strict';
import React, { Component } from 'react';
import ToDos from '../components/ToDos';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>My To-Do List</h1>
                <ToDos />
            </div>
        )
    }
}



export default Home;