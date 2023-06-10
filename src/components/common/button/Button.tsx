import React from 'react'

interface ButtonProps {
  title: string
  clickHandle?: (title: string) => void
  OnCancel?: () => void
}

export default function Button({ title, clickHandle, OnCancel }: ButtonProps) {
  const substringTitle = title === '제출' || title === '취소' ? title : title.substring(1, 7)

  return (
    <div>
    <button
      style={{  padding: `${substringTitle === 'signup'|| 'signin'? '20px 50px': '10px 20px' }`, border: 'none'  }}
      data-testid={substringTitle + '-button'}
      onClick={() => clickHandle?.(title)}
    >
      {substringTitle}
    </button>
    </div>
      
  )
}
