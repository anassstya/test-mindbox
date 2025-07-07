import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import InputTask from "./components/InputTask";
import TaskList from "./components/TaskList";
import "./App.css";
function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const addTask = (task) => {
        const newTask = {
            id: Date.now(),
            task,
            isCompleted: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };
    const toggleTaskStatus = (id) => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
    };
    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };
    const deleteCompletedTasks = () => {
        setTasks((prevTasks) => prevTasks.filter((task) => !task.isCompleted));
    };
    const incompleteTasksCount = tasks.filter((task) => !task.isCompleted).length;
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') {
            return task.isCompleted;
        }
        if (filter === 'incomplete') {
            return !task.isCompleted;
        }
        return true;
    });
    return (_jsxs("div", { className: "main-container", children: [_jsx("h1", { children: "todos" }), _jsx(InputTask, { addTask: addTask }), _jsx(TaskList, { tasks: filteredTasks, onToggle: toggleTaskStatus, onDelete: deleteTask }), _jsx("div", { className: "task-summary", children: _jsxs("p", { children: ["Remaining tasks: ", incompleteTasksCount] }) }), _jsxs("div", { className: "filter-buttons", children: [_jsx("button", { className: "btn-footer", onClick: () => setFilter('all'), children: "All" }), _jsx("button", { className: "btn-footer", onClick: () => setFilter('completed'), children: "Completed" }), _jsx("button", { className: "btn-footer", onClick: () => setFilter('incomplete'), children: "Active" })] }), _jsx("button", { className: "btn-footer", onClick: deleteCompletedTasks, children: "Clear completed" })] }));
}
export default App;
