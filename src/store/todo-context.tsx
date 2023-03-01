import React from "react";
import Todo from "../model/Todo"
import { useState } from "react";

type TodosContextObj={
    item:Todo[],
    addTodo:(text:string)=>void,
    removeTodo:(id:string)=>void
}

export const TodoContext=React.createContext<TodosContextObj>(
    {
        item:[],
        addTodo:()=>{},
        removeTodo:(id:string)=>{},
    }
)

const TodoContextProvider:React.FC<{children:React.ReactNode}>=(props)=>{
    const [todos,setTodos]=useState<Todo[]>([])

  const addTodoHandler=(todoText:string)=>{
    const newTodo=new Todo(todoText);
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    })
  }

  const removeTodoHandler=(todoId:string)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.id!==todoId)
    })
  }

  const contextValue:TodosContextObj={
    item:todos,
    addTodo:addTodoHandler,
    removeTodo:removeTodoHandler,
  }

return (
    <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
)

}

export default TodoContextProvider;

