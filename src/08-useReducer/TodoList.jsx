import { TodoItem } from "./TodoItem"

export const TodoList = ({todos, onRemoveTodo, onToggleTodo}) => {
    return (
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <TodoItem 
                        key={todo.id} 
                        id={todo.id} 
                        description={todo.description}
                        done={todo.done} 
                        onRemoveTodo={onRemoveTodo} 
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
        </ul>
    )
}
