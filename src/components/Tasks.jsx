// Tasks.js
import { useState } from 'react';
import TaskItem from './TaskItem';

function Tasks() {
const [tasks, setTasks] = useState(['Tarea 1', 'Tarea 2']);
const [newTask, setNewTask] = useState('');

const handleAddTask = () => {
    if (newTask) {
    setTasks([...tasks, newTask]);
    setNewTask('');
    }
};

const handleDeleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
};

const handleUpdateTask = (task) => {
    const updatedTasks = tasks.map((t) => (t === task ? newTask : t));
    setTasks(updatedTasks);
};

return (
    <div className="tasks">
    <ul>
        {tasks.map((task, index) => (
        <TaskItem
            key={index}
            task={task}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
        />
        ))}
    </ul>
    <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
    />
    <button onClick={handleAddTask}>Agregar tarea</button>
    </div>
);
}

export default Tasks;
