import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { HomeIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/solid';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Custom from './solutions_parts/Custom';
import Target from './solutions_parts/Target';
import { motion } from 'framer-motion';
import Solution from './solutions_parts/Solution';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  const removeHome = breadcrumbs.shift();

  return (
    <React.Fragment>
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
          <li>
            <div>
              <a href="/" className="text-gray-400 hover:text-gray-500">
                <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {breadcrumbs.map((page) => (
            <li key={page.breadcrumb.props.children}>
              <div className="flex items-center">
                <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                <a
                  href={page.breadcrumb.key}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  aria-current={page.match.pattern.end ? 'page' : undefined}
                >
                  {page.breadcrumb.props.children}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      {breadcrumbs.length === 1 ? 
        <Solution />
      :
        null
      }
    </React.Fragment>
  )
}

const Solutions = (props) => {

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
      {/* <Breadcrumbs /> */}
      <Outlet />
    </motion.div>
  );
}
export default Solutions;