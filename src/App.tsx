import React, { useState } from "react";
import InputTask from "./components/InputTask";
import TaskList from "./components/TaskList";
import "./App.css";

interface Task {
    id: number;
    task: string;
    isCompleted: boolean;
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

    const addTask = (task: string) => {
        const newTask: Task = {
            id: Date.now(),
            task,
            isCompleted: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const toggleTaskStatus = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    const deleteTask = (id: number) => {
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

    return (
        <div className="main-container">
            <h1>todos</h1>
            <InputTask addTask={addTask} />
            <TaskList
                tasks={filteredTasks}
                onToggle={toggleTaskStatus}
                onDelete={deleteTask}
            />
            <div className="task-summary">
                <p>Remaining tasks: {incompleteTasksCount}</p>
            </div>
            <div className="filter-buttons">
                <button className="btn-footer" onClick={() => setFilter('all')}>All</button>
                <button className="btn-footer" onClick={() => setFilter('completed')}>Completed</button>
                <button className="btn-footer" onClick={() => setFilter('incomplete')}>Active</button>
            </div>
            <button className="btn-footer" onClick={deleteCompletedTasks}>
                Clear completed
            </button>
        </div>
    );
}

export default App;
