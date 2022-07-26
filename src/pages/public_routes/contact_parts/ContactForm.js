import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Spinner from '../../../components/spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

const emailValidator = (string) => {
  let input = string;
  let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  if(!pattern.test(input)) {
    return 'fail'
  } else {
    return 'success'
  }
}

const webAddressValidator = (string) => {
  let input = string;
  let pattern = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
  if(!pattern.test(input)) {
    return 'fail'
  } else {
    return 'success'
  }
}

const ContactForm = (props) => {
  const [ formData, setFormData ] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    inquiry: '',
    budget: '',
    businessName: '',
    portfolio: '',
    message: '',
  })
  const [ loading, setLoading ] = useState(false);

  const { fullname, email, phoneNumber, inquiry, budget, businessName, portfolio, message } = formData;
  const navigate = useNavigate();

  // Handlers
  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const phoneNumberHandler = (e) => {
    const formattedPhoneNumber = formatContactNumber(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      ['phoneNumber']: formattedPhoneNumber,
    }))
  }

  const buttonDisabler = (state) => {
    if (state === '') {
      return <button
      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-200 "
      disabled
    >
      Submit
    </button>
    } else {
      return <button
      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
      onClick={submitHandler}
    >
      Submit
    </button>
    }
  }

  const formSpliter = (state) => {
    if(state==='business') {
      return <>
        <div>
          <div>
            <label htmlFor='budget' className='text-lg font-semibold'>
              Budget Range
            </label>
              <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10 sm:flex-wrap mt-2 mb-4' onChange={changeHandler}>
                {budgets.map((budget) => (
                  <div key={budget.id} className='flex items-center'>
                    <input 
                      id={budget.id}
                      name='budget'
                      type='radio'
                      value={budget.id}
                      className='focus:ring-yellow-600 h-4 w-4 text-yellow-600 border-gray-300 ml-2'
                    />
                    <label htmlFor={budget.id} className='ml-3 block text-sm font-medium text-gray-700 '>
                      {budget.title}
                    </label>
                  </div>
                ))}
              </div>
          </div>
          <div>
            <h3 className='mt-6 mb-4 text-lg font-semibold'>Business Name</h3>
            <label htmlFor="business" className="sr-only">
              Message
            </label>
            <input 
              type='text'
              name='businessName'
              value={businessName}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-600 focus:border-yellow-600 border-gray-300 rounded-md"
              placeholder="Business name"
              onChange={changeHandler}
            />
          </div>
          <div>
            <h3 className='mt-6 mb-4 text-lg font-semibold'>Message*</h3>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              placeholder="Tell us about your business inquiry"
              onChange={changeHandler}
            />
          </div>
        </div>
      </>
    } else if (state === 'apply') {
      return <>
        <div>
          <div>
            <h3 className='mt-4 mb-4 text-lg font-semibold'>Portfolio Link</h3>
            <label htmlFor="portfolio" className="sr-only">
              portfolio
            </label>
            <input 
              type='text'
              name='portfolio'
              value={portfolio}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-600 focus:border-yellow-600 border-gray-300 rounded-md"
              placeholder="Portfolio Link, ex) www.abcd.com"
              onChange={changeHandler}
            />
          </div>
          <div>
            <h3 className='mt-6 mb-4 text-lg font-semibold'>Message*</h3>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              placeholder="Tell us about yourself"
              onChange={changeHandler}
            />
          </div>
        </div>
      </>
    } else if (state === 'other') {
      return <>
        <div>
          <div>
            <h3 className='mt-4 mb-4 text-lg font-semibold'>Message*</h3>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              placeholder="Tell us about anything"
              onChange={changeHandler}
            />
          </div>
        </div>
      </>
    } else {
      return 'initial'
    }
  }

  const budgets = [
    { id: '2000', title: '$0 - $2000' },
    { id: '5000', title: '$2001 - $5000' },
    { id: 'more', title: 'more than $5000' },
  ]
  


  const submitHandler = async (e) => {
    e.preventDefault();
    // setLoading(true);
    console.log('submit button clicked', formData)

    if (emailValidator(formData.email) === 'fail') {
      setLoading(false);
      toast.warn('Please check email again');
      return
    }

    if (inquiry === 'apply' && webAddressValidator(formData.portfolio) === 'fail') {
      setLoading(false);
      toast.warn('Please check URL again');
      return
    }

    if (inquiry === 'business' && budget === '') {
      setLoading(false);
      toast.warn('Please select budget range');
      return
    }

    if (message === '') {
      setLoading(false);
      toast.warn('Please write some message to us');
      return
    }

    console.log('this should not be here')

    const config = {
      header: {
        "Content-Type": "application/json"
      },
      body: {
        data: formData,
      }
    }

    const request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/inquiry/register`, config)
    console.log(request)
    if(request.data.success) {
      navigate('/contact/success')
    } else {
      setLoading(false);
      toast.error('Error at submitting request')
    }
  }

  return (
    <motion.div key='contactpg' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .5 }}>
      {loading ? <Spinner /> : null}
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-black py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-lg font-regular text-white sm:text-md mb-6">Contact Us</h2>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">LET'S WORK TOGETHER</h2>
              <p className="mt-3 text-lg leading-6 text-gray-400">
                Reach out with your questions, concerns and challenges. Or just to say hi. We'll be happy to help.
              </p>
              <dl className="mt-8 text-base text-gray-600">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>15 Iroquois Ave</p>
                    <p>Lincoln Park, NJ 07035</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">+1 (973) 987-7800</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">service@ykstudio.dev</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          {/* second part */}
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-16 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <h3 className='mb-4 text-lg font-semibold'>Contact Info</h3>
              <div className='mb-4'>
                <label htmlFor="fullname" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="full-name"
                  autoComplete="name"
                  value={fullname}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-600 focus:border-yellow-600 border-gray-300 rounded-md"
                  placeholder="Full name*"
                  onChange={changeHandler}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-600 focus:border-yellow-600 border-gray-300 rounded-md"
                  placeholder="Email*"
                  onChange={changeHandler}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  value={phoneNumber}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-600 focus:border-yellow-600 border-gray-300 rounded-md"
                  placeholder="Phone*"
                  onChange={phoneNumberHandler}
                />
              </div>
              <h3 className='mt-6 mb-4 text-lg font-semibold'>Inquiry*</h3>
              <div className='mb-4'>
                <label htmlFor='inquiry' className='sr-only'>
                  I'd like to talk about...
                </label>
                <select name='inquiry' id='inquiry' value={inquiry} onChange={changeHandler} className='w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md focus:ring-yellow-600 focus:border-yellow-600 mb-2'>
                  <option value='' disabled hidden>I'd like to talk about...</option>
                  <option value='business'>Working Together</option>
                  <option value='apply'>Joining YK Studio Team</option>
                  <option value='other'>Something else</option>
                </select>
              </div>
              {formSpliter(inquiry)}
              <div className='mt-4'>
                {buttonDisabler(inquiry)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default ContactForm;