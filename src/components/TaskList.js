import { jsx as _jsx } from "react/jsx-runtime";
import TaskItem from "./TaskItem";
import "../App.css";
const TaskList = ({ tasks, onToggle, onDelete }) => {
    return (_jsx("div", { className: "task-list", children: tasks.length > 0 ? (tasks.map((task) => (_jsx(TaskItem, { id: task.id, task: task.task, isCompleted: task.isCompleted, onToggle: onToggle, onDelete: onDelete }, task.id)))) : (_jsx("p", { className: "no-tasks", children: "No tasks available" })) }));
};
export default TaskList;
