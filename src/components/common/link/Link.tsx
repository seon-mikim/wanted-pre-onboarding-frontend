import{useState} from 'react'
import { useLocation } from 'react-router-dom'
import * as S from './style'

interface LinkProps {
  pathName: string
  onNavigate: (pathName: string) => void
}

export default function Link({ pathName, onNavigate }: LinkProps) {
  const location = useLocation()
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const linkComment = location.pathname === '/signin' || location.pathname === '/' 
      ? '아직 회원이 아니시라면 회원가입 해주세요!!'
      : '회원이라면 로그인해주세요!!'

  const handleClick = () => {
    setIsClicked(!isClicked)
    if (location.pathname !== pathName) {
      onNavigate(pathName)
    } else if (pathName === '/') {
      onNavigate('/signup')
    }
  }
  return <S.Link style={{ marginTop: '20px'}} isClicked={isClicked}onClick={handleClick}>{linkComment}</S.Link>
}
