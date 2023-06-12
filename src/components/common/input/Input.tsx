import { useLocation } from 'react-router'
import * as S from './style'
import Button from '../button/Button'
import { User } from '../../../interface/auth'

interface FormProps {
  pathName: string
  value?: User
  todoInput?: string
  onEdit?: boolean
  isDisabled?: boolean
  formHandle?: (e: React.FormEvent<HTMLFormElement>) => void
  onChangeHandle?: (e: React.ChangeEvent<HTMLInputElement>) => void
  OnCancel?: () => void
}

export default function Input({
  formHandle,
  onChangeHandle,
  pathName,
  value,
  todoInput,
  onEdit,
  isDisabled,
  OnCancel,
}: FormProps) {
  const location = useLocation()

  const renderPathName = location.pathname === '/signup' || location.pathname === '/signin'
  console.log(value)
  return (
    <S.FormWrap>
      {renderPathName ? (
        <S.Form onSubmit={formHandle}>
          <div>
            <S.Label htmlFor="email">email</S.Label>
            <S.Input
              onChange={onChangeHandle}
              value={value?.email}
              data-testid="email-input"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div>
            {value?.email && !value?.email.includes('@') && (
              <p style={{ color: 'red', fontSize: '12px' }}>@ 기호가 포함되어야합니다.</p>
            )}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <S.Label htmlFor="password">password</S.Label>
            <S.Input
              onChange={onChangeHandle}
              value={value?.password}
              data-testid="password-input"
              type="password"
              name="password"
              id="password"
            />
          </div>
          {value?.password && value?.password.length < 8 && (
            <p style={{ color: 'red', fontSize: '12px' }}>비밀번호는 8글자 이상이여야합니다.</p>
          )}
          <Button title={pathName} isDisabled={isDisabled} />
        </S.Form>
      ) : (
        <S.TodoForm onSubmit={formHandle}>
          <S.TodoInput
            onChange={onChangeHandle}
            value={todoInput}
            data-testid={pathName === 'submit' ? 'modify-input' : 'new-todo-input'}
            type="text"
            name="todo"
          />
          <div style={{ display: 'flex' }}>
            <Button title={pathName} />
            {onEdit && <Button title="cancel" />}
          </div>
        </S.TodoForm>
      )}
    </S.FormWrap>
  )
}
