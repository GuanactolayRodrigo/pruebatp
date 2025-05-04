import { useState } from "react";

const TaskInput = ({guardarTarea}) => {
const [tarea, setTarea] = useState("");

const manejarEnvio = (e) => {
    
    if (tarea.trim()) {
        guardarTarea(tarea);
        setTarea("");
    }
};

    return (
        <div>
            <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)} placeholder="Nueva Tarea" />
            <button onClick={manejarEnvio}>Agregar</button>
        </div>
    );
};

export default TaskInput;
