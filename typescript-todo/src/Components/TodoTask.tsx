
import { ITask } from '../Interfaces'
interface Props{
    task:ITask
}

const TodoTask = ({task}:Props) => {
    return (
        <div className="task">
            {task.taskName}
            
        </div>
    )
}

export default TodoTask
 