import React from 'react'
import TaskItem from './taskItems'



const ListItem = (props) => {
    // console.log(props.keys)
    const taskList = props.keys.data
    // console.log(taskList)
    const renderTasks = (taskList) => {
        const tasks = taskList.map((task) =>
        <TaskItem key= {"title"+ task} keys= {task} />
        )
        return tasks
    }

    // console.log(tasks)
    return (
        <div >
            {props.keys.title}
            <button>+</button>
            <ul>
                {renderTasks(taskList)}
            </ul>
            <br />
        </div>
    )
}

export default ListItem
