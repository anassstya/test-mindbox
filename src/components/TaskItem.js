import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../App.css";
const TaskItem = ({ id, task, isCompleted, onToggle, onDelete }) => {
    return (_jsxs("div", { className: "item-elem", children: [_jsx("input", { type: "checkbox", checked: isCompleted, onChange: () => onToggle(id), className: "checkbox" }), _jsx("span", { className: isCompleted ? 'completedText' : 'notCompleted', children: task }), _jsx("button", { className: "btn-delete", onClick: () => onDelete(id), children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" })] }));
};
export default TaskItem;
