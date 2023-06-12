import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { TodoCardProps } from '../../interface/todo'
import Input from '../common/input/Input'
import * as S from './style'

export default function Card({ todo, onDelete, onUpdate }: TodoCardProps) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted)
  const [onEdit, setOnEdit] = useState(false)

  const initialValue = { todo: todo.todo, isCompleted: isChecked }
  const [isUpdateTodo, setIsUpdateTodo] = useState(initialValue)
  const onShowEditInput = () => {
    setOnEdit(!onEdit)
  }

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
    <S.CardItem key={todo.id}>
      {onEdit ? (
        <S.CardItemWrap>
          <S.Label>
            <input onChange={onChangeHandle} type="checkbox" name="isCompleted" checked={isChecked} />
          </S.Label>
          <Input
            formHandle={formHandle}
            onChangeHandle={onChangeHandle}
            pathName="submit"
            todoInput={isUpdateTodo.todo}
            onEdit={onEdit}
            OnCancel={OnCancel}
          />
        </S.CardItemWrap>
      ) : (
        <S.CardItemWrap>
          <S.Label>
            <input onChange={onChangeHandle} type="checkbox" name="isCompleted" checked={isChecked} />
            <span style={{paddingLeft:'300px', textAlign:'center'}}>{todo.todo}</span>
          </S.Label>
          <div>
            <button
              style={{ border: 'none', padding: '12px 22px', color:'#ffff', backgroundColor:'#000' }}
              data-testid="modify-button"
              onClick={onShowEditInput}
            >
              수정
            </button>
            <button
              style={{ border: 'none', padding: '12px 22px', marginLeft: '10px',color:'#ffff', backgroundColor:'#000'}}
              onClick={() => onDelete(todo.id)}
              data-testid="delete-button"
            >
              삭제
            </button>
          </div>
        </S.CardItemWrap>
      )}
    </S.CardItem>
  )
}
