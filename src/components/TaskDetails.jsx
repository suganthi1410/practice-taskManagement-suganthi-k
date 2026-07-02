import React from 'react'
import { useParams } from 'react-router' 
import {tasks} from '../mockdata/MockData.js'
function TaskDetails(){
    const{ id } = useParams();
    const task= tasks.find((task)=> task.id === Number(id));

    if(!task){
        return <p> Task not found </p>
    }


return(
    <div>
        <h1>{task.title}</h1>
        <p> {task.description}</p>
    </div>

);

}
export default TaskDetails;