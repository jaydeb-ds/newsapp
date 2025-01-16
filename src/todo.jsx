
import { useEffect, useState } from "react";
import AddTask from "./components/AddTast";
import style from "./todo.module.css"
import TodoList from "./components/Todolist";

function Todo() {

    const listStyle = {
        width:"100%", 
        justifyContent:"space-around", 
        height:"100%",
        display:"flex", 
        flexWrap:"wrap",
    }
    
    const heading= {
        textAlign:"center",
        paddingRight:"150px",
        backgroundColor:"rgb(208, 205, 205)",
        height:"30px", 
        margin:"20px"
    }

    const [taskList, setTaskList] = useState([])

    useEffect(()=>{
        let array = localStorage.getItem("taskList");

        if(array) {
            setTaskList(JSON.parse(array))
        }
    },[])


    return (<div>
        <p className={style.heading}>Hi there!</p>
        <p className={style.heading}>Click
            <AddTask taskList={taskList} setTaskList={setTaskList} />
            to add a new task</p>
        <h3 style={heading}>To Do List:</h3>
        <div style={listStyle}>
            {taskList.map((task, i) =>
                <div >
                    <TodoList key={i} task={task} index={i} taskList={taskList} setTaskList={setTaskList}/>
                 </div>
              
            )}
            </div>
    </div>)
}

export default Todo;