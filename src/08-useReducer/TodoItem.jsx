import React from 'react'

// className={`align-self-center ${done ? "text-decoration-line-through" : ""}`}

export const TodoItem = ({id, description, done, onRemoveTodo, onToggleTodo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between" onClick={() => onToggleTodo(id)}>
            <div className={`${done ? "done" : "not-done"} align-self-center`}></div>

            <span 
                className={`align-self-center ${done ? "text-decoration-line-through" : ""}`}
            >
                {description}
            </span>

            <button 
                className="btn btn-danger" 
                onClick={() => onRemoveTodo(id)}
            >
                Borrar
            </button>
        </li>
    )
}
