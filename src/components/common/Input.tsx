import React from 'react'
import { useLocation } from 'react-router'

export default function Input() {
  const location = useLocation()
  return (
    <div>
      { location.pathname === '/signup' || location.pathname === '/login' ?
       <form>
        <input type="text" />
        <input type="password" />
       </form>: <input type="text" />
      }
    </div>
  )
}