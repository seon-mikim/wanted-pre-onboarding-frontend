import { useEffect, useState } from 'react'
import Input from '../components/common/input/Input'
import Link from '../components/common/link/Link'
import { useLocation, useNavigate } from 'react-router'
import { postSignIn } from '../service/Api'

export default function SignInPage() {
  const [userInput, setUserInput] = useState({ email: '', password: '' })
  const [valid, setValid] = useState<boolean>(true);

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const getAccessToken = localStorage.getItem('accessToken')
    if (getAccessToken) navigate('/todo')
  }, [])

  const formHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await postSignIn(userInput)
    console.log(res)
    const { status, data } = res
    setUserInput({ email: '', password: '' })
    if (status === 200) {
      return navigate('/todo')
    }

    if (status === 401) {
      return alert(data.message)
    }
  }

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
    
  }
  const buttonDisable = !valid
  const onNavigate = (pathName: string) => {
    navigate(pathName)
  }

  useEffect(() => {
    const atSignCheck: boolean = userInput.email.includes('@');
    const passwordLength: boolean = userInput.password.length >= 8;
    setValid(atSignCheck && passwordLength);
  }, [userInput]);
  

  return (
    <div>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>로그인</div>
      <Input formHandle={formHandle} onChangeHandle={onChangeHandle} pathName={location.pathname} isDisabled={buttonDisable} value={userInput} />
      <Link pathName="/signup" onNavigate={onNavigate} />
    </div>
  )
}
