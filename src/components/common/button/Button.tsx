import React from 'react'

interface ButtonProps {
  title: string
  clickHandle?: (title: string) => void
}

export default function Button({ title, clickHandle }: ButtonProps) {
  const substringTitle = title === '제출' ? title : title.substring(1, 7)

  return (
    <button data-testid={substringTitle + '-button'} onClick={() => clickHandle?.(title)}>
      {substringTitle}
    </button>
  )
}
