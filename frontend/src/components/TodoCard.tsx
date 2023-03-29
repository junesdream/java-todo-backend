import "./TodoCard.css"
import {Todo} from "../model/Todo";
import {Button} from "@mui/material";

type Props = {
    todo: Todo,
    updateTodo: (todo: Todo) => void,
    deleteTodo: (id: string) => void
}

export default function TodoCard(props: Props) {

    const nextTodoStatus: {
        OPEN: "IN_PROGRESS", IN_PROGRESS: "DONE", DONE: "OPEN" } = {
        OPEN: "IN_PROGRESS",
        IN_PROGRESS: "DONE",
        DONE: "OPEN"
    }

    function onAdvanceClick() {
        const updatedTodo: Todo = {...props.todo, status: nextTodoStatus[props.todo.status]}
        props.updateTodo(updatedTodo)
    }

    function onDeleteClick() {
        props.deleteTodo(props.todo.id)
    }

    return (
    <div className="todo-card">
        <h5>{props.todo.description}</h5>
        <p>{props.todo.status}</p>
        <p>{props.todo.id}</p>
        {props.todo.status !== 'DONE' && <Button variant="outlined" color="success" onClick={onAdvanceClick}>Advance</Button>}
        {props.todo.status === 'DONE' && <Button variant="outlined" color="success" onClick={onDeleteClick}>Delete</Button>}
    </div>
)
}