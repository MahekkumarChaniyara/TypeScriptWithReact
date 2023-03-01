import React from "react";
import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { useContext } from "react";
import { TodoContext } from "../store/todo-context";

const NewTodo:React.FC=()=>{

    const todosCtx=useContext(TodoContext);

    const todoInputRef=useRef<HTMLInputElement>(null);

    const submitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        const eneteredText=todoInputRef.current!.value;
        if(eneteredText.trim().length===0){
            return;
        }
        todosCtx.addTodo(eneteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoInputRef}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;