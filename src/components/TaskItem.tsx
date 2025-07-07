import React from "react";
import "../App.css";

interface TaskItemProps {
    id: number,
    task: string,
    isCompleted: boolean,
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}


const TaskItem: React.FC<TaskItemProps>  = ({id, task, isCompleted, onToggle, onDelete}) => {
    return(
        <div className="item-elem">
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => onToggle(id)}
                className="checkbox"
            />
            <span className={isCompleted ? 'completedText' : 'notCompleted'}>
                {task}
            </span>
            <button className="btn-delete" onClick={() => onDelete(id)}>
                Удалить
            </button>
        </div>
    )
}

export default TaskItem;