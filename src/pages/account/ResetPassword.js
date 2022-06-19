import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ResetPassword.css';

const ResetPassword = (props) => {

  // States
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ success, setSuccess ] = useState('');

  // Handlers
  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    console.log(password, confirmPassword, 'clicked')

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };

    if(password !== confirmPassword) {
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('');
      },5000)
      return setError('Passwords does not match')
    }

    try {
      let resetToken = window.location.pathname.slice(15)
      console.log(resetToken)
      const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/auth/resetpassword/${resetToken}`, { password }, config)
      // TODO: update sucess
      if(data.success) {
        setSuccess(`${data.data} Please login again`)
      }
    } catch (error) {
      console.log(error)
      setError(error.response);
      setTimeout(() => {
        setError('');
      }, 5000)
    }
  }

  return (
    <div className='resetPw_container'>
      <p>Reset Password</p>
      {!!error ? <p><span>{error}</span></p> : null}
      {!!success ? <p><span>{success}</span></p> : null}
      <form onSubmit={resetPasswordHandler}>
        <input 
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter New Password'
        />
        <input 
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm New Password'
        />
        <button type='submit'>Reset Password</button>
      </form>
    </div>
  );
}
export default ResetPassword;