export interface Todo {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

export interface TodoCardProps {
  todo: Todo
  onDelete: (todoId: Todo['id']) => void
  onUpdate: ({ todo, todoId }: UpdataTopoRequest) => void
  
}

export type CreateTodoRequest = Todo['todo']

export interface Todos {
  todos: Todo[]
}

export interface CardListProps {
  todos: Todos['todos']
  onDelete: (todoId: Todo['id']) => void
  onUpdate: ({ todo, todoId }: UpdataTopoRequest) => void
}

export interface UpdataTopoRequest {
  todoId: Todo['id']
  todo:  Todo['todo']; 
  isCompleted: Todo['isCompleted'] 
}
