import { useEffect, useRef, useState } from "react";
import EditTask from "./EditTask";
import style from "./Todolist.module.css"
function TodoList({ task, index, taskList, setTaskList }) {



    const editBox = {
        width: "95%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "5px"
    }


    const box = {
        width: "320px",
        padding: "0px 0px 10px 10px",
        marginTop: "20px",
        borderRadius: "20px",
        border: "2px solid",


        borderColor: "blue",
        backgroundColor: "rgba(0, 102, 255, 0.055)",
        borderTop: "20px solid rgb(0, 102, 255)",
        boxShadow: "inset -2px -2px 35px rgba(21, 51, 110, 0.36), 3px -3px 5px rgba(0, 0, 255, 0.495)"
    }


    const incomplete = {
        borderColor: "red",
        backgroundColor: "rgba(223, 186, 186, 0.15)",
        border: "2px solid",
        borderTop: "20px solid rgb(255, 30, 0)",
        boxShadow: "inset -2px -2px 35px rgba(184, 34, 34, 0.36), 3px -2px 8px rgba(255, 0, 0, 0.49)"
    }

    const complete = {
        borderColor: "green",
        backgroundColor: "rgba(111, 249, 96, 0.15)",
        border: "2px solid green",
        borderTop: " 20px solid rgb(23, 199, 35)",
        boxShadow: "inset -2px -2px 35px rgba(36, 110, 21, 0.36), 3px -3px 5px rgba(0, 255, 98, 0.49)"
    }

    const [boxStyle, setBoxStyle] = useState(box)
    const [time, setTime] = useState(task.duration);
    const [running, setRunning] = useState(false)

    useEffect(()=>{
    let interval;
    
    if(running){
        interval = setInterval(()=> {
            setTime((prevTime) => prevTime+10)
        }, 10)
    } else if (!running){
        clearInterval(interval);
    }
    return () => clearInterval(interval);
},[running])


const handleStop=()=>
    {
        setRunning(false);
        let taskIndex = taskList.indexOf(task);

        taskList.splice(taskIndex,1,{
            title : task.title,
            description:task.description,
            taskstamp: task.taskstamp,
            duration:time
        })

        localStorage.setItem("taskList",JSON.stringify(taskList))
        window.location.reload();
    }


    const handleDelete = idemId => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        localStorage.setItem("taskList",JSON.stringify(taskList));
        window.location.reload();
        // setTaskList((currentTask => currentTask.filter(TodoList => TodoList.id !== idemId)))
    }

    
    function boxStlyleBtn() {
        if (boxStyle["borderColor"] !== "green") {
            setBoxStyle({ ...boxStyle, ...complete })
        }

        else if (boxStyle["borderColor"] == "green") {
            setBoxStyle({ ...boxStyle })
        }
    }

    function boxStlyleBtn2() {
        if (boxStyle["borderColor"] !== "red") {
            setBoxStyle({ ...boxStyle, ...incomplete })
        }

        else if (boxStyle["borderColor"] == "red") {
            setBoxStyle({ ...boxStyle })
        }
    }



    return (<>
        <div>
            <div style={boxStyle}>
                <div style={editBox}>
                    <h3 className={style.h3}>{task.title}</h3>
                    <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList} />
                </div>
                <p>{task.description}</p>

                <div className={style.time}>
                    <div className={style.timeText}>
                        <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>

                        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>

                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>

                        <span style={{ fontSize: "13px" }}>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                    </div>
                    <div>
                        {running ?
                            (
                                <button className={style.timeBtn} onClick={()=>handleStop()}>stop</button>
                            )
                            :
                            ( 
                                <button className={style.timeBtn} onClick={()=>setRunning(true)}>start</button>
                            )
                        }
                        <button className={style.timeBtn} onClick={()=>(setTime(0))}>restart</button>
                    </div>
                </div>


                <div className={style.btnsBox}>
                    <button className={style.btns} onClick={handleDelete}>Delete</button>
                    <button className={style.btns} onClick={()=>{boxStlyleBtn();}} >Complete</button>
                    <button className={style.btns} onClick={boxStlyleBtn2}>Incomplete </button>
                </div>
            </div>
        </div>
    </>)
}
export default TodoList;