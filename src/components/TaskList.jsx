import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";

const TaskList = () => {
    const [tareas, setTareas] = useState([]);

    const guardarTarea = (nuevaTarea) => {
        setTareas([...tareas, { id: Date.now(), nuevaTarea, completa: false }]);
    };

    const cambiarEstadoTarea = (id) => {
        setTareas(tareas.map(t => t.id === id ? { ...t, completa: !t.completa } : t));
    };

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(t => t.id !== id));
    };

    return (
        <div>
            <TaskInput guardarTarea={guardarTarea} />
            <ul>
                {tareas.map(t => (
                    <TaskItem key={t.id} tarea={t} cambiarEstadoTarea={cambiarEstadoTarea} eliminarTarea={eliminarTarea} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

