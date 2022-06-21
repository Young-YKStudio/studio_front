import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* TODO: Change logo image */}
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          {!!error ? 
            <p className="mt-2 text-center text-sm font-medium text-indigo-500">
              {error}
            </p>
          :
          null
          }
        </div>
        <form className="mt-8 space-y-6" onSubmit={submitHandler}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="on"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name*"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="contact" className="sr-only">
                Contact
              </label>
              <input
                id="contact"
                name="contact"
                type="tel"
                autoComplete="on"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contact Number*"
                value={contact}
                onChange={phoneNumberHandler}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm" className="sr-only">
                Password
              </label>
              <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm password*"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </button>
          </div>

          <div className='flex items-center justify-center text-sm'>
            <p className='mr-4'>Already have an account?</p>
            <Link to='/login' className='text-indigo-600 hover:text-indigo-500 font-medium'>Login Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;