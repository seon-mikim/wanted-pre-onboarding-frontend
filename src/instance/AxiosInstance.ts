import axios from 'axios'

const createInstance = () => {
  const instance = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  instance.interceptors.request.use((request) => {
    const getAccessToken = localStorage.getItem('accessToken')
    if (getAccessToken) request.headers['Authorization'] = `Bearer ${getAccessToken}`
    return request
  })
  return instance
}
export const instance = createInstance()
