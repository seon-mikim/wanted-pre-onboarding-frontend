
import Header from '../header/Header'
import * as S from './style'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <S.Layout>
      <Header/>
      <Outlet />
    </S.Layout>
  )
}
