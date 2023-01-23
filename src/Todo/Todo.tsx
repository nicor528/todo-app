import Title from "./components/Title";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";

export default function Todo () {

    return(
        <div>
        <TodoProvider>
            <Title/>
            <TodoList></TodoList>
        </TodoProvider>
        </div>
    )
}