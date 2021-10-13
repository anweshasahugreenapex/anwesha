import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {addTodo,deleteTodo,reset} from "../actions/index"

const Todo = () => {
    const[input,setInput]=useState("");
    const dispatch=useDispatch()
  return (
    <>
      <h1>Redux todo list</h1>
      <div className="main-div">
        <div className="child-div">
          <div className="add-item">
            <input type="text" placeholder=" write task here.." value={input} onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            <button className="add-btn" onClick={()=>{
                dispatch(addTodo(input))
            }}>add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
