import { useState } from "react";

export const TodoAdd = ({onAddTodo}) => {
    const [inputText, setInputText] = useState('')

    const onInputChange = (event) => {
        setInputText(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            description: inputText,
            done: false,
        };
        onAddTodo(newTodo);
        setInputText('')
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                value={inputText}
                placeholder="Nueva tarea"
                className="form-control" 
                onChange={(event) => onInputChange(event)} 
            />
            <button 
                type="submit" 
                className="btn btn-primary mt-1"

            >
                Agregar
            </button>
            {/*<input type="submit" className="btn btn-primary mt-1" value="Agregaaaar" />*/}
        </form>
    )
}
