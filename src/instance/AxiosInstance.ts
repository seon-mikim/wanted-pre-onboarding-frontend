import axios from "axios"

const createInstance = () => {
   const instance = axios.create({
        baseURL: process.env.SERVER_URL,
        timeout:3000,
        headers: {
            'Content-Type' : 'application/json',
        }
    })
    return instance
}
export const instance = createInstance()