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
        default:
            return initialState;
    }
};