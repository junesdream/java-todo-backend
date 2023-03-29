import "./TodoCard.css"
import {Todo} from "../model/Todo";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

type Props = {
    todo: Todo,
    updateTodo: (todo: Todo) => void,
    deleteTodo: (id: string) => void
}

export default function TodoCard(props: Props) {

    const navigate = useNavigate()
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
        {/*<button onClick={() => {navigate('/todos/' + props.todo.id)}}>Details</button>*/}

        <Button variant="outlined" sx={{ color: ' #50BFE6' }} onClick={() => {navigate('/todos/' + props.todo.id)}}> Details</Button>
        {props.todo.status !== 'DONE' && <Button variant="outlined" color="success" onClick={onAdvanceClick}>Advance</Button>}
        {props.todo.status === 'DONE' && <Button variant="outlined" sx={{ color: '#FF00CC' }} onClick={onDeleteClick}>Delete</Button>}


    </div>
)
}