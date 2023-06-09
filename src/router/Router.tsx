import { createBrowserRouter } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import TodoListPage from '../pages/TodoListPage';
import SignUpPage from '../pages/SignUpPage';
import Layout from '../components/common/layout/Layout';
import MainPage from '../pages/MainPage';




const Router = createBrowserRouter([
  {
    path: '/',
    element:  <Layout/>,
    children: [
      {
        index: true,
        element:<MainPage/>
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage/>,
      },
      {
        path: '/todo',
        element: <TodoListPage />,
      },
    ],
  },
]);

export default Router;