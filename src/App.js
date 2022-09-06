import React,{useState} from "react";
import "./style.css";
import TodoLists from "./components/todo.js"
export default function App() {
  const [task,setTask]=useState("")
  const [todos,setTodos]=useState([])
 
  function Changehandler(e){
    setTask(e.target.value)
  };
  function Submithandler(e){
    e.preventDefault();
    const newtodo=[...todos,task];
    setTodos(newtodo);
    setTask("");
  }
  return (
    <div className="l">
    <div >
      <center>
      <h3>TO-DO LIST</h3>
      <form onSubmit={Submithandler} >
     <input name="name" value={task} placeholder="enter todo" onChange={Changehandler}/><br />
     <input type='submit' />
      </form>
      <TodoLists todolist={todos}/>
      </center>
     
    </div>
    </div>
  );
}
