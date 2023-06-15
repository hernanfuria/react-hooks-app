export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'add_todo':
            return [...initialState, action.payload];
        case 'remove_todo':
            // const newTodos = [];
            // for (const todo of initialState) {
            //     if (todo.id != action.payload) {
            //         newTodos.push(todo);
            //     };
            // };
            // return newTodos;
            return initialState.filter(todo => todo.id !== action.payload);

        case 'toggle_todo':
            return initialState.map(todo => {
                if (action.payload === todo.id) {
                    // console.log(`toggle ${todo.id} to ${!todo.done}`)
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            });

        default:
            return initialState;
    }
};