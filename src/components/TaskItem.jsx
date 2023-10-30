
import { useState } from 'react';

import PropTypes from 'prop-types';

function TaskItem({ task, onDelete, onUpdate }) {

TaskItem.propTypes = {
    task: PropTypes.string.isRequired, // Ejemplo: Se espera que 'task' sea una cadena y sea requerida.
    onDelete: PropTypes.func.isRequired, // Ejemplo: Se espera que 'onDelete' sea una función y sea requerida.
    onUpdate: PropTypes.func.isRequired, // Ejemplo: Se espera que 'onUpdate' sea una función y sea requerida.
};

const [isEditing, setEditing] = useState(false);
const [editedTask, setEditedTask] = useState(task);

const handleEdit = () => {
    setEditing(true);
};

const handleSave = () => {
    onUpdate(editedTask);
    setEditing(false);
};

return (
    <li className="task-item">
    {isEditing ? (
        <>
        <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
        />
        <button onClick={handleSave}>Guardar</button>
        </>
    ) : (
        <>
        {task}
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => onDelete(task)}>Borrar</button>
        </>
    )}
    </li> 
);
}

export default TaskItem;
