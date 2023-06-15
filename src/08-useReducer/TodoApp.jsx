import { useReducer, useState } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"


/*
const initialState = [
    {
        id: new Date().getTime(),
        description: 'besarlo a aniballs',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'limpiar el baño',
        done: false,
    },
    {
        id: new Date().getTime() * 5,
        description: 'Dormir la siesta',
        done: false,
    },
]
*/

export const TodoApp = () => {
    // const [todos, dispatch] = useReducer(todoReducer, initialState)

    const [todos, setTodos] = useState([])

    const onAddTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const onRemoveTodo = (id) => {
        const newTodos = [];
        for (const todo of todos) {
            if (todo.id != id) {
                newTodos.push(todo);
            };
        };
        setTodos(newTodos);
    }

    return (
        <>
            <h1>TodoApp 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList todos={todos} onRemoveTodo={onRemoveTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr />
                    <TodoAdd onAddTodo={onAddTodo} />
                </div>

            </div>

        </>
    )
}