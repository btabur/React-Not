# React project reducer

- beş on tane useState kullanıldığı durumlarda kodlar giderek daha karmaşık bir hale gelir
ve yönetilmesi giderek zorlaşır. Bundan dolayı useReducer kullanılır.
- useReducer : stateleri bir yerden yönetmemize olanak sağlar.

` const [state,dispatch] =useReducer(todoReducer,initialsState) `

 - şeklinde oluşturulur.
 ###  todoReducer:
  statelere ne olunacağını bu fonksiyon içerisinde kodlarız.

  ```javascript
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
 ```


### initialsState
 statelerin başlangıç değerini tutar

 ```javascript
  export const initialsState = {
    todos: [],
    isDarkMode: true,
    isNavbar : false,
    openModal: false
} 
```

### state
state üzerinden tutulan değerlere ulaşırız.

### dispatch 

dispatch ile reducer a emir göndeririz.

```javascript
  onClick={()=>dispatch({
                type:'CLEAR'
            })} 
```