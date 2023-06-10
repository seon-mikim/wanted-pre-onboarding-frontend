import { useLocation } from 'react-router'
import * as S from './style'
import Button from '../button/Button'
import { User } from '../../../interface/auth'

interface FormProps {
  pathName: string
  value?:User 
  todoInput?:string
  onEdit?: boolean
  formHandle?: (e:React.FormEvent<HTMLFormElement>) => void
  onChangeHandle?: (e:React.ChangeEvent<HTMLInputElement>) => void
  OnCancel?: () => void
}

export default function Input({formHandle, onChangeHandle,pathName, value, todoInput, onEdit, OnCancel}: FormProps) {
 
  const location = useLocation()


  const renderPathName = location.pathname === '/signup' || location.pathname === '/signin'
  return (
    <S.FormWrap>
      {renderPathName ? (
        <S.Form onSubmit={formHandle}>
          <div>
            <S.Label htmlFor="email">email</S.Label>
            <S.Input onChange={onChangeHandle} value={value?.email} data-testid="email-input" type="text" name='email' id="email" />
          </div>
          <div style={{marginBottom: '20px'}}>
            <S.Label htmlFor="password">password</S.Label>
            <S.Input onChange={onChangeHandle} value={value?.password} data-testid="password-input" type="password" name='password' id="password" />
          </div>
          <Button title={pathName} />
        </S.Form>
      ) : (
        <S.TodoForm onSubmit={formHandle}>
          <S.TodoInput onChange={onChangeHandle} value={todoInput} data-testid="new-todo-input" type="text" name='todo' />
          <Button title={pathName}/>
          {onEdit&&<Button title='취소' OnCancel={OnCancel}/>
          }
        </S.TodoForm>
      )}
    </S.FormWrap>
  )
}
