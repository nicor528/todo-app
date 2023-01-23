import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./TodoReducer";

const Initial_State: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: "1",
            desc: "Practicar Type Script",
            completed: false
        },
        {
            id: "2",
            desc: "Practicar Mongo DB",
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface props {
    children : JSX.Element | JSX.Element[]
}

export default function ( {children} : props) {

    const [todoState, dispatch] = useReducer( todoReducer, Initial_State)

    const toggleTodo = (id:string) => {
        dispatch( {type: 'toggleTodo', payload: {id}} )
    }

    return(
        <TodoContext.Provider value={{todoState, toggleTodo}}>
            {children}
        </TodoContext.Provider>
    )
}