//import { useContext } from "react"
//import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { Todo } from "../interfaces/interfaces"

interface props {
    todo : Todo
}

export default function TodoItem ( { todo } : props) {

    //const {toggleTodo} = useContext(TodoContext)

    const {toggleTodo} = useTodos()

    /*const handleDbClick = () => {
        toggleTodo (todo.id)
    }*/

    return(
        <li style={{cursor: 'pointer', textDecoration: todo.completed ? 'line-trough' : ""}} /*onDoubleClick={handleDbClick}*/ onDoubleClick={ () => toggleTodo (todo.id)} >
            {todo.desc}
        </li>
    )
}