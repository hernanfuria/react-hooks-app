import React from 'react'

export const TodoItem = ({id, description, done, onRemoveTodo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{description}</span>
            <button 
                className="btn btn-danger" 
                onClick={() => onRemoveTodo(id)}
            >
                Borrar
            </button>
        </li>
    )
}
