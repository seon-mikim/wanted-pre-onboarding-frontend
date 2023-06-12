import React from 'react'
import { CardListProps } from '../../interface/todo'
import Card from '../card/Card'
import * as S from './style'

export default function CardList({ todos, onDelete, onUpdate }: CardListProps) {
  return (
    <S.CardListWrap style={{ width: '100%' }}>
      <S.CardList>
        {todos.map((todo) => (
          <Card todo={todo} key={todo.id} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </S.CardList>
    </S.CardListWrap>
  )
}
