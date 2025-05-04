const TaskItem = ({ tarea, cambiarEstadoTarea, eliminarTarea }) => {
    return (
        <li>
            <p style={{ textDecoration: tarea.completa ? "line-through" : "none" }}>
                {tarea.nuevaTarea}
                <button className="completar" onClick={() => cambiarEstadoTarea(tarea.id)}>
                {tarea.completa ? "Desmarcar" : "Completa"}
                </button>
                <button className="borrar" onClick={() => eliminarTarea(tarea.id)}>Borrar</button>
            </p>
            
        </li>
    );
};

export default TaskItem;
