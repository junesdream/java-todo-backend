import {FormEvent, useState} from "react";
import {NewTodo} from "../model/Todo";
import axios from "axios";
import {Button, TextField} from "@mui/material";
import "./AddTodo.css"
import {useNavigate} from "react-router-dom";

type AddTodoProps = {
    addTodo: (newTodo: NewTodo) => void
}

export default function AddTodo(props: AddTodoProps) {

    const initialState: string = ""
    const [description, setDescription] = useState<string>(initialState);

    //programatisch zu navigieren
    const navigate = useNavigate();

    function onSaveTodo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newTodo: NewTodo = {description: description, status: 'OPEN'}
        props.addTodo(newTodo)
        axios.post("api/todo", newTodo)
            .then(() => setDescription(initialState))
            .catch(console.error)

        navigate('/todos')
    }

    return (
        <div className="addTodo">
            <form onSubmit={onSaveTodo}>
                <input  type="text" name="description" value={description} onChange={(event) => {setDescription(event.target.value)}}/>
                {/*<button>save</button>*/}
                {/* eslint-disable-next-line react/jsx-no-undef */}
                {/*<Button variant="contained" color="success" type="submit">Save</Button>*/}
                <button > Save </button>
            </form>
       {/*     {/!*<input value={description} onChange={(event) => {setDescription(event.target.value)}}/>
                <button onClick={onSaveTodo}>Save</button>*!/}*/}
        </div>
    )
}

