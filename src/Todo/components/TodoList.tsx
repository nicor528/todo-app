//import { useContext } from "react"
//import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";


export default function TodoList () {

    //const { todoState } = useContext(TodoContext) ;
    //const {todos} = todoState

    const { todos } = useTodos()
     
    //console.log(todoState, todos)

    return(
        <ul>
            { todos.map( todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    )
}