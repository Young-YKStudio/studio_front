import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Custom from './Custom';
import Target from './Target';
import { motion } from 'framer-motion';

const Solution = (props) => {

  const [ selectedSection, setSelectedSection ] = useState('option2');

  const selectButtonHandler = (e, option) => {
    if(option === 'option1') {
      setSelectedSection('option1')
    } else if (option === 'option2') {
      setSelectedSection('option2')
    }
  }

  const sectionDistributor = (option) => {
    if(option === 'option1') {
      return <Custom />
    } else if(option === 'option2') {
      return <Target />
    }
  }

  const button1 = (state) => {
    if(state === 'option1') {
      return (
        <button className='relative bg-white border-gray-200 rounded-md shadow-sm py-2 w-1/2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8'>
          Customized Digital Products
        </button>
      )
    } else {
      return (
        <button className='ml-0.5 relative border border-transparent rounded-md py-2 w-1/2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8' onClick={(e) => {selectButtonHandler(e, 'option1')}}>Customized Digital Products</button>
      )
    }
  }

  const button2 = (state) => {
    if(state === 'option2') {
      return (
        <button className='relative bg-white border-gray-200 rounded-md shadow-sm py-2 w-1/2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8'>
          Packaged Digital Products
        </button>
      )
    } else {
      return (
        <button className='ml-0.5 relative border border-transparent rounded-md py-2 w-1/2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8' onClick={(e) => {selectButtonHandler(e, 'option2')}}>Packaged Digital Products</button>
      )
    }
  }

  return (
    <motion.div key='solution1' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .5 }}>
      <div className='max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:flex-col sm:align-center'>
          <h1 className='text-5xl font-extrabold text-gray-900 sm:text-center'>Solutions</h1>
          <p className='mt-5 text-xl text-gray-500 sm:text-center'>
            Every business is different. <br />We offer unique digital products for any entrepreneur, <br /> also provide targeted market digital products for any industries. 
          </p>
          <div className='relative mt-6 bg-gray-100 rounded-lg p-0.5 flex self-center sm:mt-8'>
            {button2(selectedSection)}
            {button1(selectedSection)}
          </div>
        </div>
      </div>
      {sectionDistributor(selectedSection)}
    </motion.div>
  );
}
export default Solution;
