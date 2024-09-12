import React from 'react'
import './TaskCard.css'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'

const TaskCard = ({title,tags,handleDelete,index}) => {
    console.log(title,tags)
  return (
   <article className='task_card'>
    <p className='task_text'>{title}</p>
    <div className='task_card_bottom_line' >
        <div className='task_card_tags'>
        {/* <Tag tagName='HTML'></Tag>
        <Tag tagName='CSS'></Tag> */}
        {
            tags.map((tag,index)=>(<Tag key={index} tagName={tag} selected/>))
        }
        </div>
        <div className='task_delete' onClick={()=> handleDelete(index)}>
         <img className='delete_icon' src={deleteIcon} alt=''></img>
        </div>
    </div>

   </article>
  )
}

export default TaskCard