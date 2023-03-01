import React from "react";
import PrintTodo from "./PrintTodo";
import classes from "./Todos.module.css";
import { useContext } from "react";
import {TodoContext} from "../store/todo-context"


const Todos: React.FC=()=>{
    const todosCtx=useContext(TodoContext)
    return <ul className={classes.todos}>
        {todosCtx.item.map(item=><PrintTodo text={item.text} key={item.id} onRemoveTodo={todosCtx.removeTodo.bind(null,item.id)}/>)}
    </ul>
}

export default Todos; 