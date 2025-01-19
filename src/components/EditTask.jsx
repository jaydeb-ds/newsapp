import style2 from "./Todolist.module.css"
import { useState,useRef} from "react";
import style from "../todo.module.css"


function EditTask({task, index, taskList,setTaskList}) {

    const titleRef = useRef(null)
     const descriptionRef = useRef(null)

    const [edit, setEdit] = useState(false)

    const [addModel, setAddModel] = useState(false)
    

        // console.log(taskList);

        // let taskIndex = taskList.indexOf(task);
    
        //  let dP = taskList[taskIndex]['description'];
         
        //  descriptionRef.current.value = {dP};

    //    const handaInput= e =>{
    //     const {name, value}= e.target;
    //     if( name==="projectName") setTitle(value)
    //     if(name==="taskdescription" ) setDescription(value)
    //    }
        
    // useEffect(()=>{
        let ti=taskList.indexOf(task)
        let titleValue = taskList[ti]['title']
        let destnValue = taskList[ti]['description']

        const [titles, setTitle]= useState(titleValue)
        const [description, setDescription]= useState(destnValue)
    // },)



        const handleChage1 = (event) => {
            setTitle(event.target.value);
        }
        const handleChage2 = (event) => {
            setDescription(event.target.value);
        }

        const handleUpdated = (e) => {
            e.preventDefault();
            let title = titleRef.current.value;
            let description = descriptionRef.current.value;

            let taskIndex = taskList.indexOf(task)
            taskList.splice(taskIndex,1,{
                title : title,
                description: description,
                timestamp:task.taskstamp,
                duration: task.duration
            });

            localStorage.setItem("taskList", JSON.stringify(taskList))
            window.location.reload()
            
            // setTaskList(
            //     [...taskList,{title,description}]
            // )
            setEdit(false);
        }

       

    return (<>
        <button className={style2.edit} onClick={() => { setEdit(true)}}>Edit</button>

        {
            edit ?
                <div className={style.task_pop_up}>
                    <div className={style.task_pop_up_box}>
                        <div className={style.task_pop_up_head}>
                            <h3>Edit Task</h3>
                            <button className={style.task_pop_up_head_btn} onClick={() => setEdit(false)}> X </button>
                        </div>
                        <form>
                            <p className={style.task_pop_up_input_text}>Task title</p>
                            <input name="projectName" ref={titleRef} value={titles} onChange={handleChage1} className={style.task_pop_up_input} type="text" placeholder="Enter task title" />

                            <p className={style.task_pop_up_input_text}>Task Description</p>
                            <textarea name="taskdescription" ref={descriptionRef}  value={description} onChange={handleChage2} className={style.task_pop_up_input} style={{ height: "100px" }} placeholder="Enter the task details"></textarea>
                            <button className={style.task_pop_up_input_btn} onClick={handleUpdated}> Update Task</button>

                        </form>
                    </div>
                </div>

                : null
        }

    </>)
}
export default EditTask;