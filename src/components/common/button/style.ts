import styled from 'styled-components'

interface ButtonProps {
  disabled?: boolean
  title?: string
}

export const Button = styled.button<ButtonProps>`
  border: none;
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'black')};
  padding: 8px 20px;
  font-size: 20px;
  margin-left: 10px;
  color: #ffff;
`
