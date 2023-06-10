import { styled } from 'styled-components'

export const FormWrap = styled.div`
  width: 100%;
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const TodoForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: start;
`

export const Input = styled.input`
  padding: 10px 20px;
  width: 250px;
`
export const TodoInput = styled.input`
  padding: 10px 20px;
  width: 400px;
  margin-right: 20px;
`
