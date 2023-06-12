import { useEffect, useState } from 'react'
import Input from '../components/common/input/Input'
import Link from '../components/common/link/Link'
import { useLocation, useNavigate } from 'react-router'
import { postSignUp } from '../service/Api'

export default function SignUpPage() {
  const [userInput, setUserInput] = useState({ email: '', password: '' })
  const [valid, setValid] = useState<boolean>(true);
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const getAccessToken = localStorage.getItem('accessToken')
    if (getAccessToken) navigate('/todo')
  }, [])

  const formHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await postSignUp(userInput)
    const { status, data } = res
    setUserInput({ email: '', password: '' })
    if (status === 201) {
      return navigate('/signin')
    }

    if (status === 400) {
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
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>회원가입</div>
      <Input formHandle={formHandle} onChangeHandle={onChangeHandle} pathName={location.pathname} value={userInput} isDisabled={buttonDisable}/>
      <Link pathName="/signin" onNavigate={onNavigate} />
    </div>
  )
}
