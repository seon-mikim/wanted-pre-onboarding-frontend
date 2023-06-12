import React from 'react'
import * as S from './style'
interface ButtonProps {
  title: string
  isDisabled?: boolean
  clickHandle?: (title: string) => void
}

export default function Button({ title, clickHandle, isDisabled }: ButtonProps) {
  const substringTitle = title === 'submit' || title === 'cancel' ? title : title.substring(1, 7)
  const checkTitle = title === '/signup' || '/signin'? 'true': undefined
  console.log(isDisabled)
  console.log(checkTitle)
  return (
    <S.Button
      title={checkTitle}
      disabled={isDisabled}
      data-testid={substringTitle + '-button'}
      onClick={() => clickHandle?.(title)}
    >
      {substringTitle}
    </S.Button>
  )
}
