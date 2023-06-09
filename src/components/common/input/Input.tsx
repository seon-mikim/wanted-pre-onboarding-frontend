import { useLocation } from 'react-router'
import * as S from './style'
import Button from '../button/Button'
import { User } from '../../../interface/auth'

interface FormProps {
  pathName: string
  value?:User 
  todoInput?:string
  formHandle?: (e:React.FormEvent<HTMLFormElement>) => void
  onChangeHandle?: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({formHandle, onChangeHandle,pathName, value, todoInput}: FormProps) {
 
  const location = useLocation()


  const renderPathName = location.pathname === '/signup' || location.pathname === '/signin'
  return (
    <S.FormWrap>
      {renderPathName ? (
        <form onSubmit={formHandle}>
          <div>
            <label htmlFor="email">email</label>
            <input onChange={onChangeHandle} value={value?.email} data-testid="email-input" type="text" name='email' id="email" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input onChange={onChangeHandle} value={value?.password} data-testid="password-input" type="password" name='password' id="password" />
          </div>
          <Button title={pathName}/>
        </form>
      ) : (
        <form onSubmit={formHandle}>
          <input onChange={onChangeHandle} value={todoInput} data-testid="new-todo-input" type="text" name='todo' />
          <Button title={pathName}/>
        </form>
      )}
    </S.FormWrap>
  )
}
