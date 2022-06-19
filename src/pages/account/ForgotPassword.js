import { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css'

const ForgotPassword = (props) => {

  // States
  const [ email, setEmail ] = useState('');
  const [ error, setError ] = useState('');
  const [ success, setSuccess ] = useState('');

  // Handlers
  const buttonHandler = async (e) => {
    e.preventDefault();

    const config ={
      header: {
        "Content-Type": "application/json"
      }
    };

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/forgotpassword`, { email }, config);
      if(data.success) {
        setSuccess(`${data.data}.  Please check your email.`)
      }
    } catch (error) {
      console.log(error)
      setError(error);
      setEmail('');
      setTimeout(() => {
        setError('');
      },5000)
    }
  }

  return (
    <div className='fp_container'>
      <p>Forgot password</p>
      <form onSubmit={buttonHandler}>
        <p>Please enter the email address you registered yoour accoutn with.<br/>We will send you reset password confirmation to this email.</p>
        {!!error ? <p><span>{error}</span></p> : null}
        {!!success ? <p><span>{success}</span></p> : null}
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email address'
        />
        <button type='submit'>Send Email</button>
      </form>
    </div>
  );
}
export default ForgotPassword;