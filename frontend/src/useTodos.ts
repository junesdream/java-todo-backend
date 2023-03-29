import {useEffect, useState} from "react";
import {NewTodo, Todo} from "./model/Todo";
import axios from "axios";
import {toast} from "react-toastify";

export default function useTodos() {
    //1. Todos to load and show
    const [todos, setTodos] = useState<Todo[]>([])

    //3. to call Methode loadALlTodos with useEffect, only one time at beginning
    useEffect(() => {
        loadAllTodos()
    }, [])

    //2. Methode: Get request to get all todos
    function loadAllTodos() {
        axios.get("/api/todo")
            .then((getAllTodosResponse) => {setTodos(getAllTodosResponse.data)})
          //  .catch((error) => {console.error(error)})
        toast.error('🦄 Wow so easy!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }


    function addTodo(newTodo: NewTodo) {
        axios.post("/api/todo", newTodo)
            .then((addTodoResponse) => {
                //            [] wir erstellen eine neue Liste
                //              ... (spreading) wir nehmen alle Elemente der alten Liste und fügen sie in die neue ein
                //                       , und wir fügen das neue Todo zusätzlich hinzu
                setTodos([...todos, addTodoResponse.data])
            })
            .catch((error) => {
                toast.error("Unknown Error, try again later! " + error.response.statusText, {autoClose: 10000})
            })
    }

    function updateTodo(todo: Todo) {
        axios.put(`/api/todo/${todo.id}`, todo)
            .then((putTodoResponse) => {
                //Wir wollen das alte Todo ersetzen, alle anderen sollen gleich bleiben
                setTodos(todos.map(currentTodo => {
                    //wir prüfen ob das aktuelle element, das todo ist das wir ersetzten wollen?
                    if (currentTodo.id === todo.id) {
                        //Ja es ist das wir ersetzten wollen: wir returnen das todo aus der response
                        return putTodoResponse.data
                    }
                    else {
                        //Nein es ist ein anderes, wir lassen das so wie es ist
                        return currentTodo
                    }
                }))
            })
            .catch(console.error)
    }

    function deleteTodo(id: string) {
        axios.delete('/api/todo/' + id)
            .then(() => {
                setTodos(todos.filter((todo) => todo.id !== id))
            })
            .catch(console.error)
    }

    return {todos, addTodo, updateTodo, deleteTodo}
}

