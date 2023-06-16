import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"


export const TodoApp = () => {
    const {todos, todosCount, pendingTodosCount, onAddTodo, onRemoveTodo, onToggleTodo} = useTodo();

    return (
        <>
            <h1>TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onRemoveTodo={onRemoveTodo} 
                        onToggleTodo={onToggleTodo}
                    />
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
