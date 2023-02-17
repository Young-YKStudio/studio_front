import { useState } from 'react';

const EmailForm = (props) => {

  const [ emailTitle, setEmailTitle ] = useState('');
  const [ emailContent, setEmailContent ] = useState('');

  return (
    <form className="mt-8 py-8 border-t border-white flex flex-col justify-center items-center">
      <p className='text-white text-center mb-2'>Subject</p>
      <input type='text' placeholder='Please input email subject...' value={emailTitle} onChange={(e) => {setEmailTitle(e.target.value)}} className='w-full rounded-md bg-white mb-4' />
      <p className='text-white text-center mb-2'>Email Content</p>
      <textarea type='text' rows='10' placeholder='Please input email content here. Just enter your message, and your message will be formatted.' value={emailContent} onChange={(e) => {setEmailContent(e.target.value)}} className='w-full rounded-md bg-white mb-4' />
      <button className='bg-green-600 px-6 py-4 rounded-md text-white w-full hover:bg-green-800 md:w-1/3'>Send Email(s)</button>
    </form>
  );
}
export default EmailForm;