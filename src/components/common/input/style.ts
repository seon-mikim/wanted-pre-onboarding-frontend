import { styled } from 'styled-components'

export const FormWrap = styled.div`
  display: flex;
  form {
    label {
      display: block;
      font-weight: 500;
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: start;
    }

    input {
      padding: 10px 20px;
      width: 250px;
    }
  }
`
