import React,{useState} from "react";
//import "./style.css";

function TodoLists({todolist}){
return(
  <div>
    {todolist.map((todo,index)=>
    <div key={index}><h5>{todo}</h5> 
    </div>)}
    </div>
)
    }
export default TodoLists;