import {tasks} from '../mockdata/MockData.js'
import{ Link } from 'react-router'

function TaskLists(){
    return(
<div className="task-container">
<h2>Task List</h2>
<ul className="task-list">
    {tasks.map((task) =>(
    <li  key= {task.id} >
<Link to ={`/task/${task.id}`}> 
 {task.title}
</Link>
            </li>

))
    } 
    </ul>  

</div>
    );
}
 export default TaskLists;
