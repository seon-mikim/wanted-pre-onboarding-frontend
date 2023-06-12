import React, { useEffect } from 'react'
import Button from '../components/common/button/Button'
import {  useNavigate } from 'react-router-dom'
import Link from '../components/common/link/Link'

export default function MainPage() {
  const navigate = useNavigate()
  const getAccessToken = localStorage.getItem('accessToken')
  useEffect(()=> {
    if(getAccessToken) {
      navigate('/todo')
     }
  },[])

  const clickHandle = (title: string) => {
    navigate(title)
  }

  const onNavigate = (pathName:string) => {
    navigate(pathName)
 }

  return (
    <div>
      <div style={{marginBottom: '10px'}}>
        <span>오늘 할일을 적고 싶을 땐...</span>
      </div>
      <div>
        <Button title="/signin" clickHandle={clickHandle} />
        <div>
        <Link pathName='/' onNavigate={onNavigate}/>
        </div>
      </div>
    </div>
  )
}
