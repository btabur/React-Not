export const initialsState = {
    todos: [],
    isDarkMode: true,
    isNavbar : false,
    openModal: false
}

export const todoReducer = (state,action) => {
    switch(action.type) {
        case "ADD_TODO" :
       const newTodos=[...state.todos,action.payload]
            return {...state,todos:newTodos};
        case "DELETE_TODO":

            const filtered = state.todos.filter((todo)=> todo.id !==action.payload)

            return {...state,todos:filtered};
        case "CLEAR":  
            return {...state, todos:[] };
        
        default:
            return state;
    }
};