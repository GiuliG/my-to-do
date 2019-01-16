import React, { Component } from 'react';
import Form from './Form';
import ToCheck from './ToCheck';
import {DB_CONFIG} from '../Config/Config';
import firebase from 'firebase/app';
import 'firebase/database';

class ToDos extends Component {
app = firebase.initializeApp(DB_CONFIG);
database = this.app.database().ref().child('todos');
state = {
    todos: [],
};

//componentWillMount() {
  //const previousTodo = this.state.todos;
  //this.database.on('child_added',snap => {
    //previousTodo.push({
      //id: snap.key,
      //todo: snap.val().todos,
  //})
  //console.log(previousTodo)
  //})
  //}
  

addToDo =(todo)=>{
    this.database.push().set({ todo: todo});
    const newToDo = [todo,...this.state.todos]
    this.setState ({
        todos: newToDo
    })
  }

 


toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // it updates the todo
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  handleDeleteTodo = id =>{
    this.database.child(id).remove();
      this.setState({
          todos: this.state.todos.filter(todo => todo.id !== id)
      })
  }

//noToDosLeft = (todo) => {
  //if (!firebase.apps.length){
    //return 'well done'
  //} else {
    //return todo
  //}
//}

    render() {
      //const goodJob = this.noToDosLeft()
      return (
        <div >
          <Form onSubmit={this.addToDo}/>
          {this.state.todos.map(todo => (
            
             <ToCheck 
             key={todo.id}
             toggleComplete={() => this.toggleComplete(todo.id)}
             onDelete={() => this.handleDeleteTodo(todo.id)}
             todo={todo}
          
           />
         ))} 
            <div className="toDoLeft"> To Dos Left: {this.state.todos.filter(todo => !todo.complete).length}</div>
          
         </div>
      )
    }
  }
  
  export default ToDos;