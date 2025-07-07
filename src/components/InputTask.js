import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import "../App.css";
const InputTask = ({ addTask }) => {
    const [task, setTask] = useState("");
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task.trim());
            setTask("");
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "form", children: [_jsx("input", { value: task, onChange: handleChange, placeholder: "What needs to be done?", className: "input" }), _jsx("button", { type: "submit", className: "btn", children: "+" })] }));
};
export default InputTask;
