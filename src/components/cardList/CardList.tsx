import React from 'react'
import { CardListProps } from '../../interface/todo'
import Card from '../card/Card'

export default function CardList({ todos, onDelete, onUpdate }: CardListProps) {
  return (
    <div style={{ width: '80%', marginLeft:'20px' }}>
     
        {todos.map((todo) => (
          <Card todo={todo} key={todo.id} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
   
    </div>
  )
}
