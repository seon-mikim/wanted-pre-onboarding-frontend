import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Input from '../components/common/input/Input'
import { useLocation, useNavigate } from 'react-router'
import { deleteTodo, getTodos, postTodo, updateTodo } from '../service/Api'
import { Todo, UpdataTopoRequest } from '../interface/todo'
import CardList from '../components/cardList/CardList'
import { TodoWrap } from './style'

export default function TodoListPage() {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const location = useLocation()
  const navigate = useNavigate()
  const pathName = location.pathname

  useEffect(() => {
    const getAccessToken = localStorage.getItem('accessToken')
    if (!getAccessToken) navigate('/signin')
  }, [])

  useEffect(() => {
    setTodosByResponse()
  }, [])

  const setTodosByResponse = async () => {
    const data = await getTodos()
    setTodos(data)
  }

  const formHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(todoInput)
    await postTodo(todoInput)
    setTodoInput('')
    await setTodosByResponse()
  }

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTodoInput(value)
  }

  const onDelete = async (todoId: Todo['id']) => {
    await deleteTodo(todoId)
    await setTodosByResponse()
  }

  const onUpdate = async ({ todo, todoId, isCompleted }: UpdataTopoRequest) => {
    await updateTodo({ todo, isCompleted, todoId })
    await setTodosByResponse()
  }

  return (
    <TodoWrap>
      <div style={{ marginBottom: '20px' }}>
        <Input formHandle={formHandle} onChangeHandle={onChangeHandle} todoInput={todoInput} pathName={pathName} />
      </div>
      <div style={{width:'80%'}}>{<CardList todos={todos} onDelete={onDelete} onUpdate={onUpdate} />}</div>
    </TodoWrap>
  )
}
