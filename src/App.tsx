import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Button from './components/common/Button';

function App() {
  const location = useLocation();

  return(
          <div>
            <Header/>
            <Outlet/>
            { location.pathname !== '/todo'&&
              <div>
                { location.pathname !== '/signup' &&
                    <Button title='sign up' color='blue' size='16px'/>
                }
                { location.pathname !== '/login' &&
                    <Button title='login' color='blue' size='16px'/>
                }
              </div>
            }
          </div>
    );
}

export default App;
