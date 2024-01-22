import { useState } from "react"
import "./style.css"
import { ToDoForm } from "./TodoForm"
import { ToDoList } from "./ToDoList"

export default function App() {

  const [todos, setTodos] = useState([])

  function addToDo(title){
    setTodos(currentTodos => {
      return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false },
      ]
  })
  }


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })

  }


  return (
    <>
    <ToDoForm onSubmit = {addToDo}/>
    <h1 className="header">To do list</h1>
    <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>

  )
}

