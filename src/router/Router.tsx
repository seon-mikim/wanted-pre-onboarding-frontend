import { createBrowserRouter } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import TodoListPage from '../pages/TodoListPage';
import SignUpPage from '../pages/SignUpPage';
import App from '../App';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
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

export default router;