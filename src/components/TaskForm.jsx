import React, { useState } from 'react'
import './TaskForm.css'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {
    // const [task,setTask] = useState('')
    // const [status,setStatus] = useState('todo')
    // console.log(task,status)

    const [taskData, setTaskData] = useState({
        task: '',
        status: 'todo',
        tags: []
    })
    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const { name, value } = e.target;
console.log(name,value)
        setTaskData(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
       
        e.preventDefault();
        setTasks(prev => {
            return [ ...prev, taskData ]
        });
        // to reset the form, also use value attribute
        setTaskData({  task: '',
            status: 'todo',
            tags: []})

    }
    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return { ...prev, tags: filterTags }
            })
        } else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }
    }

    const checkTag = (tag) => {
        // console.log(taskData.tags)
        // console.log(taskData.tags.some(item => item === tag))
        return taskData.tags.some(item => item === tag)
    }

    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input type='text'  name='task' className='task_input' placeholder='Enter your task'
                    onChange={handleChange} value={taskData.task}>
                </input >
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagName='HTML' selectTag={selectTag} selected={checkTag("HTML")}></Tag>
                        <Tag tagName='CSS' selectTag={selectTag} selected={checkTag("CSS")}></Tag>
                        <Tag tagName='JavaScript' selectTag={selectTag} selected={checkTag("JavaScript")}></Tag>
                        <Tag tagName='React' selectTag={selectTag} selected={checkTag("React")}></Tag>


                    </div>
                    <div>
                        <select className='task_status' name='status' onChange={handleChange} value={taskData.status}>
                            <option value='todo'>To do</option>
                            <option value='doing'>Doing</option>
                            <option value='done'>Done</option>
                        </select>
                        <button type='submit' className='task_submit'>+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm