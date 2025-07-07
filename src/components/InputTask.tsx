import React, { useState } from 'react';
import "../App.css";

interface InputTaskProps {
    addTask: (task: string) => void;
}

const InputTask: React.FC<InputTaskProps> = ({addTask}) => {
    const [task, setTask] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(task.trim()){
            addTask(task.trim());
            setTask("");
        }
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <input
                value={task}
                onChange={handleChange}
                placeholder="What needs to be done?"
                className="input"
            />
            <button type="submit" className="btn">+</button>
        </form>
    )
}

export default InputTask;
