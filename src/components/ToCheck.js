import React from 'react';

export default (props) =>(
    <div
    style={{
      textDecoration: props.todo.complete ? "line-through" : ""
    }} onClick={props.toggleComplete}>
        <h3>{props.todo.name}</h3>
        <p> {props.todo.text}</p>
        <button onClick={props.onDelete}>x</button>
  </div>

)