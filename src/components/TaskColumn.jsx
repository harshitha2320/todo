import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status ,handleDelete}) => {
    console.log(tasks)
	return (
		<section className="task_column">
			<h2 className="task_column_heading">
				<img className="task_column_icon" src={icon} alt=""></img>
				{title}
			</h2>
			{/* <TaskCard></TaskCard> */}
			{tasks.map(
				(tasks, index) =>
					tasks.status === status && <TaskCard key={index} title={tasks.task} tags={tasks.tags} index= {index} handleDelete={handleDelete}/>
			)}
		</section>
	);
};

export default TaskColumn;
