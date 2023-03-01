import React from "react";
import classes from "./PrintTodo.module.css";

const PrintTodo:React.FC<{text:string, onRemoveTodo:()=>void}>=(props)=>{
    
    return (
        <>
            <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
        </>
    )
}

export default PrintTodo;