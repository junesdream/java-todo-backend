import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import TodoGallery from "./components/TodoGallery";
import AddTodo from "./components/AddTodo";
import useTodos from "./useTodos";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import TodoDetail from "./components/TodoDetail";


function App() {
    const {todos, addTodo, deleteTodo, updateTodo} = useTodos()

    return (
        //BrowserRotuer
        <BrowserRouter>
            <div className="App">
           {/* <ToastContainer
            position="top-left"
            autoClose={5000}
        />*/}
            <Header/>
            {/*Routes Gruppierung*/}
            <Routes>
                <Route element={<Navigate to='/todos'/>}/>
                <Route path='/todos'
                       element={<TodoGallery todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>}/>
                <Route path='/todos/add'
                       element={<AddTodo addTodo={addTodo}/>}/>
                <Route path='/todos/:id' element={<TodoDetail />} />
        </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
