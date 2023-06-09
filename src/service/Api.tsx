import { AxiosError, AxiosResponse } from 'axios'
import { instance } from '../instance/AxiosInstance'
import { User } from '../interface/auth'
import { CreateTodoRequest, Todo, UpdataTopoRequest } from '../interface/todo'

export const postSignUp = async (user: User) => {
  try {
    const response = await instance.post('/auth/signup', user)
    return response
  } catch (error) {
    return (error as AxiosError).response as AxiosResponse
  }
}

export const postSignIn = async (user: User) => {
  try {
    const response = await instance.post('/auth/signin', user)
    localStorage.setItem('accessToken', response.data.access_token)
    return response
  } catch (error) {
    return (error as AxiosError).response as AxiosResponse
  }
}

export const postTodo = async (todo: CreateTodoRequest) => {
  try {
    const response = await instance.post('/todos', { todo })
    console.log(response)
    return response
  } catch (error) {
    return (error as AxiosError).response as AxiosResponse
  }
}

export const getTodos = async () => {
  try {
    const { data } = await instance.get('/todos')
    return data
  } catch (error) {
    return (error as AxiosError).response as AxiosResponse
  }
}

export const deleteTodo = async (todoId: Todo['id']) => {
  try {
    const response = await instance.delete(`/todos/${todoId}`)
    return response
  } catch (error) {
    return (error as AxiosError).response as AxiosResponse
  }
}

export const updateTodo = async ({ todoId, todo, isCompleted }:UpdataTopoRequest) => {
  try {
    const response = await instance.put(`/todos/${todoId}`, { todo, isCompleted })
    return response
  } catch (error) {
    return (error as AxiosError).response as AxiosResponse
  }
}
