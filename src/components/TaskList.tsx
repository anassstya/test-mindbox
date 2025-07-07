import React from "react";
import TaskItem from "./TaskItem";
import "../App.css";

interface Task {
    id: number;
    task: string;
    isCompleted: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
    return (
        <div className="task-list">
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        isCompleted={task.isCompleted}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))
            ) : (
                <p className="no-tasks">No tasks available</p>
            )}
        </div>
    );
};

export default TaskList;