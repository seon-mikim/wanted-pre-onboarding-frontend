import React from 'react'
import { Link } from 'react-router-dom'


interface ButtonProps {
  title: string
  color: string
  size: string
 
}

export default function Button({title, color, size}: ButtonProps) {
  return (
    <div style={{ color, fontSize: size }}>
      {
        title === 'sign up'?
      <Link to={title.split(' ').join('')}>
      {title}
      </Link>:
      <Link to={title}>
      {title}
      </Link>
      }
    </div>
  )
}
