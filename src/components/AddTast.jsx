
import { useRef, useState } from "react";
import style from "../todo.module.css"


function AddTask({ taskList, setTaskList }) {
    const [addModel, setAddModel] = useState(false)
    // const [errormsg, setErrorMsg] = useState(false)

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)

    const handleAdd = () => {

        let title = titleRef.current.value;
        let description = descriptionRef.current.value;

        let timestamp = new Date()
        let tempList = taskList;
        tempList.push({
            title,
            description,
            timestamp: timestamp,
            duration: 0
        })

        localStorage.setItem("taskList", JSON.stringify(tempList))
        window.location.reload()

        // if (title =="") {
        //     // setErrorMsg(true)
        // }
        // else {
        //     setAddModel(false)
        //     // setTaskList([...taskList, { title, description }])
        // }
    }

    return (<>

        <button className={style.btn} onClick={() => setAddModel(true)}> + New</button>

        {addModel ?
            <div className={style.task_pop_up}>
                <div className={style.task_pop_up_box}>
                    <div className={style.task_pop_up_head}>
                        <h3>Add New Task</h3>
                        <button className={style.task_pop_up_head_btn} onClick={() => setAddModel(false)}> X </button>
                    </div>
                    <form >
                        <p className={style.task_pop_up_input_text}>Task title</p>
                        <input ref={titleRef} required className={style.task_pop_up_input} type="text" placeholder="Enter task title" />

                        <p className={style.task_pop_up_input_text}>Task Description</p>
                        <textarea ref={descriptionRef} className={style.task_pop_up_input} style={{ height: "100px" }} placeholder="Enter the task details"></textarea>
                        <button className={style.task_pop_up_input_btn} onClick={handleAdd}> Add Task</button>

                    </form>
                </div>
            </div> : null
        }
    </>)
}

export default AddTask;
