import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const[inputList, setInputList] = useState(""); //when button is clicked input ilst is added to old items
  const[items, setItems] = useState([]); //usestate stors in items it is empty array

  const itemEvent = (event) =>{
    setInputList(event.target.value);  
  };

  const listOfItems = () => { 
    setItems((oldItems) => {
      return [...oldItems, inputList]; //input list is added here with spread operator
    })
    setInputList("");
  };
  
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }
  return ( 
    <div className="main_div">
      <div className="center_div">
        <br />
          <h1>Todo List</h1>
        <br />       
          <input type="text" placeholder="Add Task" onChange={itemEvent}  value={inputList}/> 
          <button onClick={listOfItems}>+</button>
        <ol>
          {/* <li>{inputList}</li>
          <li>duck </li> */}
          {items.map((itemval,index) => { //
            return <TodoList key={index} id={index} text={itemval} onSelect={deleteItems} />;
            // return  <li>{itemval}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
