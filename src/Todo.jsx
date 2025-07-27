import { useState } from "react"
function Todo(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    const handleInput=(e)=>{
        setNewTask(e.target.value);
    }
    const addTask=()=>{
        if(newTask.trim()=="") return;
        setTasks([...tasks,newTask]);
        setNewTask("");
    }
    const deleteTask=(index)=>{
        const updatedTasks=tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);
    }
    const moveTaskUp=(index)=>{
        const updatedTasks=[...tasks];
        if(index>0){
            [updatedTasks[index-1],updatedTasks[index]]=[updatedTasks[index],updatedTasks[index-1]];
            setTasks(updatedTasks);
        }
    }
    const moveTaskDown=(index)=>{
        const updatedTasks=[...tasks];
        if(index<tasks.length-1){
            [updatedTasks[index+1],updatedTasks[index]]=[updatedTasks[index],updatedTasks[index+1]];
            setTasks(updatedTasks);
        }
    }
    return(
        
        <>
        <div className="todo">
        <h1>To Do List</h1>
        <input id="newtask" type="text" placeholder="Enter the task..." onChange={handleInput} value={newTask}/>
        <button onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map((task,index)=>(
                <li key={index}>{index+1}.   {task}
                <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="up-button" onClick={()=>moveTaskUp(index)}> 👆</button>
                <button className="down-button" onClick={()=>moveTaskDown(index)}>👇</button>
                </li>
            ))}
        </ul>
        
        </div>
        
        </>
        
    )
}
export default Todo