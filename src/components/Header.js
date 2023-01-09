import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useState, useEffect } from 'react';

import PublicHeader from './headerParts/PublicHeader';
import ClientHeader from './headerParts/ClientHeader';
import EmployeeHeader from './headerParts/EmployeeHeader';
import AdminHeader from './headerParts/AdminHeader';

const Header = (props) => {
  // Handlers
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [ currentPath, setCurrentPath ] = useState();

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(logout())
      dispatch(reset())
      sessionStorage.clear();
      window.location.reload(false)
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  const headerDetailDistributor = (auth, path) => {
    if (path === '/demo_fb_starter' || path === '/demo_fb_starter/menu') {
      return console.log('demo')
    } else {
      if (auth === 'admin') {
        return <AdminHeader logoutHandler={logoutHandler}/>
      } else if (auth === 'employee') {
        return <EmployeeHeader logoutHandler={logoutHandler}/>
      } else if (auth === 'client') {
        return <ClientHeader logoutHandler={logoutHandler}/>
      } else {
        return <PublicHeader logoutHandler={logoutHandler}/>
      }
    }
  }

  return (
    // TODO: import Tailwind components here
    <nav className='header_nav'>
      {headerDetailDistributor(props.authUser, currentPath)}
    </nav>
  );
}
export default Header;