import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const [todosCount, setTodosCount] = useState(todos.length)
    const [pendingTodosCount, setPendingTodosCount] = useState(todos.length)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        setTodosCount(todos.length)
        setPendingTodosCount(todos.filter(todo => !todo.done).length)
    }, [todos])

    const onAddTodo = (todo) => {
        const action = {
            type: 'add_todo',
            payload: todo,
        }
        dispatch(action);
    }

    const onRemoveTodo = (id) => {
        const action = {
            type: 'remove_todo',
            payload: id,
        }
        dispatch(action);
    }

    const onToggleTodo = (id) => {
        const action = {
            type: 'toggle_todo',
            payload: id,
        }
        dispatch(action);
    }

    return {
        todos, 
        todosCount,
        pendingTodosCount,
        onAddTodo,
        onRemoveTodo, 
        onToggleTodo, 
    };
}
