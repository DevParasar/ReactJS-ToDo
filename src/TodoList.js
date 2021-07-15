import React from "react";

const TodoList = (props) => {


    return (
        <div className="todo_style">
            <button 
                className="delete" 
                onClick={() =>{
                    props.onSelect(props.id)
                }}
            >x</button>
             <li>{props.text}</li>
        </div>
        );
};

export default TodoList;