import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { TodoCardProps } from '../../interface/todo'
import Input from '../common/input/Input'

export default function Card({ todo, onDelete, onUpdate }: TodoCardProps) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted)
  const [onEdit, setOnEdit] = useState(false)

  const initialValue = { todo: todo.todo, isCompleted: isChecked }
  const [isUpdateTodo, setIsUpdateTodo] = useState(initialValue)
  const onShowEditInput = () => {
    setOnEdit(!onEdit)
  }
  const pathName = '제출'

  const OnCancel = () => {
    setOnEdit(!onEdit)
  }

  const formHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onUpdate({ todo: isUpdateTodo.todo, isCompleted: isUpdateTodo.isCompleted, todoId: todo.id })
    setOnEdit(false)
  }

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type, value } = e.currentTarget
    setIsChecked(checked)
    setIsUpdateTodo({
      ...isUpdateTodo,
      todo: name === 'todo' ? value : isUpdateTodo.todo,
      [name]: type === 'checkbox' ? checked : value,
    })
  }
  return (
  <ul style={{listStyle: 'none', paddingLeft:'0'}}>

    {onEdit ? (
      <li key={todo.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin:'20px auto', alignItems:'center', flex: 1}}>
        <input onChange={onChangeHandle} type="checkbox" name="isCompleted" checked={isChecked} />
        <Input
          formHandle={formHandle}
          onChangeHandle={onChangeHandle}
          pathName={pathName}
          todoInput={isUpdateTodo.todo}
          onEdit={onEdit}
          OnCancel={OnCancel}
        />
      </li>
    ) : (
      <li key={todo.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin:'20px auto'}}>
        <input onChange={onChangeHandle} type="checkbox" name="isCompleted" checked={isChecked} />
        <span style={{ display: 'block', padding: '10px 20px' }}>{todo.todo}</span>
        <div>
          <button style={{ border:'none', padding: '12px 22px', marginRight: '10px'}}data-testid="modify-button" onClick={onShowEditInput}>
            수정
          </button>
          <button style={{ border:'none', padding: '12px 22px'}} onClick={() => onDelete(todo.id)} data-testid="delete-button">
            삭제
          </button>
        </div>
      </li>
    )}
  </ul>

  )
}
