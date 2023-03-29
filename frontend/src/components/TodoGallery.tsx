import "./TodoGallery.css"
import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";

type Props = {
    todos: Todo[],
    updateTodo: (todo: Todo) => void,
    deleteTodo: (id: string) => void
}
export default function TodoGallery(props: Props){

    //To get part of list through map with filter
    const openTodos: Todo[] = props.todos.filter(todo => todo.status === "OPEN")
    const inProgressTodos: Todo[] = props.todos.filter(todo => todo.status === "IN_PROGRESS")
    const doneTodos: Todo[] = props.todos.filter(todo => todo.status === "DONE")

    return (
        <div className="todo-gallery">
            {/*to show 3 lists with every 3 differents todos*/}
            <div className='todo-gallery_column'>
                <h2>Todo</h2>
                {
                    openTodos.map((todo) => <TodoCard key={todo.id}
                                                      todo={todo}
                                                      updateTodo={props.updateTodo}
                                                      deleteTodo={props.deleteTodo}/>)
                }
            </div>
            <div className='todo-gallery_column'>
                <h2>Doing</h2>
                {
                    inProgressTodos.map((todo) => <TodoCard key={todo.id}
                                                            todo={todo}
                                                            updateTodo={props.updateTodo}
                                                            deleteTodo={props.deleteTodo}/>)
                }
            </div>
            <div className='todo-gallery_column'>
                <h2>Done</h2>
                {
                    doneTodos.map((todo) => <TodoCard key={todo.id}
                                                      todo={todo}
                                                      updateTodo={props.updateTodo}
                                                      deleteTodo={props.deleteTodo}/>)
                }
            </div>
        </div>

    )
}