import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const LogIn = (props) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, { email, password }, config)
      console.log(data);
      if(data.success === true) {
        sessionStorage.setItem('authToken', data.token);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('userId', data.userId);
        window.location.reload(false)
      }
    } catch (error) {
      console.log(error)
      setError('Please check your email and password again')
    }
  }

  useEffect(() => {
    if (sessionStorage.role === 'employee') {
      console.log('employee logged in')
      // redirect to employee dash
    } else if (sessionStorage.role === 'admin') {
      console.log('admin logged in')
      // redirect to admin dash
    } else if (sessionStorage.role === 'client') {
      navigate('/')
    }
  },[])

  return (
    <div className="login-container">
      <div className='login-content-container'>
        <h3>Log In</h3>
        {!!error ? <p>{error}</p> : null}
        <form onSubmit={submitHandler}>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button type="submit">LogIn</button>
        </form>
        <div className='login_nav'>
          <ul>
            <li><Link to='/forgotpassword'>Forgot Password?</Link></li>
            <li>Don't have an account?</li>
            <li><Link to='/register'>Register</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default LogIn;