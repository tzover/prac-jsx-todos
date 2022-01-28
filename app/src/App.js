import { useState } from 'react'

import { makeStyles } from "@material-ui/core/styles"

import Header from './components/Header'
import Input from './components/Input'
import Notyet from './components/Notyet'
import Complete from './components/Complete'


function App() {
  const classes = useStyles()

  const [todoText, setTodoText] = useState("")
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  const onChangeTodoText = (event) => setTodoText(event.target.value)

  const onClickAddTodo = () => {
    if (todoText === "") {
      alert("TODOを入力してください")
      return
    }
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const onClickDelete = (idx) => {
    // const newTodos = [...incompleteTodos]
    // newTodos.splice(idx, 1)
    const newTodos = incompleteTodos.filter((todo, id) => id !== idx)
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (idx) => {
    const newTodos = incompleteTodos.filter((todo, id) => {
      return id !== idx
    })
    setIncompleteTodos(newTodos)

    const newCompleteTodos = [...completeTodos, incompleteTodos[idx]]
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack = (idx) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[idx]]
    const newCompleteTodos = completeTodos.filter((todo, id) => id !== idx)
    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
  }

  return (
    <div className={classes.App}>
      <Header />
      <Input
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAddTodo}
        disabled={incompleteTodos.length >= 10}
      />
      <Notyet
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <Complete
        completeTodos={completeTodos}
        onClickBack={onClickBack}
      />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  App: {
    textAlign: "center",
    margin: "20px",
  },

}))

export default App
