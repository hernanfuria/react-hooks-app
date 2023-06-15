import { TodoItem } from "./TodoItem"

export const TodoList = ({todos, onRemoveTodo}) => {
    return (
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <TodoItem 
                        key={todo.id} 
                        id={todo.id} 
                        description={todo.description} 
                        onRemoveTodo={onRemoveTodo} 
                    />
                ))
            }
        </ul>
    )
}
