import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const formatContactNumber = (Num) => {
  if(!Num) return Num;

  const telPhoneNum = Num.replace(/[^\d]/g, "");
  const phoneNumberLength = telPhoneNum.length;
  if (phoneNumberLength < 4) return telPhoneNum;
  if (phoneNumberLength < 7) {
    return `(${telPhoneNum.slice(0, 3)}) ${telPhoneNum.slice(3)}`;
  }
  return `(${telPhoneNum.slice(0, 3)}) ${telPhoneNum.slice(
    3,
    6
  )}-${telPhoneNum.slice(6, 10)}`;
}

const Register = (props) => {

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword] = useState('');
  const [ contact, setContact ] = useState('');
  const [ error, setError ] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (!!sessionStorage.authToken) {
      navigate('/');
    }
  }, [])

  // handlers
  const phoneNumberHandler = (e) => {
    const formattedPhoneNumber = formatContactNumber(e.target.value);
    setContact(formattedPhoneNumber)
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }

    if(password !== confirmPassword) {
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('')
      },10000);
      return setError('Passwords do not match')
    }

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, {username, email, password, contact}, config)
      
      if (!!data.success) {
        sessionStorage.setItem("authToken", data.token);
        sessionStorage.setItem("role", data.role);
        sessionStorage.setItem("userId", data.userId);
        window.location.reload(false)
      }
    } catch (error) {
      setError('The email address has already been taken')
      setTimeout(() => {
        setError('');
      }, 10000)
    }
  }

  return (
    <div className='register_container'>
      <form onSubmit={submitHandler}>
        <h3>Register</h3>
        {!!error && <p><span className='errorMsg'>{error}</span></p>}
        <input 
          type='text'
          id='name'
          required
          value={username}
          placeholder='Enter your name'
          onChange={(e) => setUsername(e.target.value)}
          autoComplete='on'
        />
        <input 
          type='email'
          id='email'
          required
          value={email}
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='on'
        />
        <input 
          type='password'
          id='password'
          required
          value={password}
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='on'
        />
        <input 
          type='password'
          id='confirmPassword'
          required
          value={confirmPassword}
          placeholder='Confirm your password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete='on'
        />
        <input 
          type='tel'
          id='contact'
          required
          value={contact}
          placeholder='Enter your contact number'
          onChange={phoneNumberHandler}
          autoComplete='on'
        />
        <button type='submit'>Register</button>
        <p><span>Already have an account?</span><Link to='/login'>&nbsp;Login</Link></p>
      </form>
    </div>
  );
}
export default Register;