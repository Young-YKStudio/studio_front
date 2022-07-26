import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/outline';

const Services = (props) => {
  const [ currentSection, setCurrentSection ] = useState('Intro')

  const contentDispatch = (state) => {
    if(state==='Intro') {
      return <motion.div key='serviceDiv' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
        <h2 className="text-3xl font-extrabold text-white" id="join-heading">
          Our Services
        </h2>
        <ul className='text-white'>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Consulting')}}
          >Phase 1. <span className='font-bold'>Consulting</span></li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Brand')}}
          >Phase 2. <span className='font-bold'>Brand Identity & Positioning</span></li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Develop')}}
          >Phase 3. <span className='font-bold'>Development</span></li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Marketing')}}
          >Phase 4. <span className='font-bold'>Digital Products & Marketings</span></li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Support')}}
          >Phase 5. <span className='font-bold'>Continuing Support</span></li>
        </ul>
        <p className="text-lg text-white">
          Through pioneering brand strategy, design and development, we uncover the cultural tensions and business experiences that help brands stand out.
        </p>
        <div className='flex flex-row justify-end flex-nowrap'>
          <p className="w-96 ">
          </p>
          <button className='text-white flex flex-row pl-10 font-bold hover:text-yellow-500' onClick={serviceButtonHandler}>See services &nbsp;<ArrowRightIcon className='w-5 h-5 text-xs pt-1' /></button>
        </div>
      </motion.div>
    }else if(state==='Consulting') {
      return <motion.div key='serviceDiv' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
        <h2 className="text-3xl font-extrabold text-white" id="join-heading">
          <span className="text-xl font-normal">Service:</span> Consulting
        </h2>
        <ul className='text-white'>
          <li className='block w-full bg-white px-4 py-2 text-black border-b border-white rounded-t-md'
          >Phase 1. <span className='font-bold'>Consulting</span></li>
          <li>
            <ul className='grid lg:grid-cols-3 grid-cols-2 bg-white text-black rounded-b-md mb-2 pb-2'>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Examine requirements</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Price Quotes</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Lead Time Quotes</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Breif introductions</li>
            </ul>
          </li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Brand')}}
          >Phase 2. <span className='font-bold'>Brand Identity & Positioning</span></li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Develop')}}
          >Phase 3. <span className='font-bold'>Development</span></li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Marketing')}}
          >Phase 4. <span className='font-bold'>Digital Products & Marketings</span></li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Support')}}
          >Phase 5. <span className='font-bold'>Continuing Support</span></li>
        </ul>
        <div className='flex flex-row justify-end flex-nowrap'>
          <p className="w-96 ">
          </p>
          <button className='text-white flex flex-row pl-10 font-bold hover:text-yellow-500' onClick={serviceButtonHandler}>See services &nbsp;<ArrowRightIcon className='w-5 h-5 text-xs pt-1' /></button>
        </div>
      </motion.div>
    }else if(state==='Brand') {
      return <motion.div key='serviceDiv' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
        <h2 className="text-3xl font-extrabold text-white" id="join-heading">
          <span className="text-xl font-normal">Service:</span> Brand Identity & Positioning
        </h2>
        <ul className='text-white'>
        <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Consulting')}}
          >Phase 1. <span className='font-bold'>Consulting</span></li>
          <li className='block w-full bg-white px-4 py-2 text-black border-b border-white rounded-t-md'
          >Phase 2. <span className='font-bold'>Brand Identtity & Positioning</span></li>
          <li>
            <ul className='grid lg:grid-cols-3 grid-cols-2 bg-white text-black rounded-b-md mb-2 pb-2'>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Brand Strategy</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Logo Design</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> UI / UX</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Persona Creation</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Visual Hierarchy</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Printings</li>
            </ul>
          </li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Develop')}}
          >Phase 3. <span className='font-bold'>Development</span></li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Marketing')}}
          >Phase 4. <span className='font-bold'>Digital Products & Marketings</span></li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Support')}}
          >Phase 5. <span className='font-bold'>Continuing Support</span></li>
        </ul>
        <div className='flex flex-row justify-end flex-nowrap'>
          <p className="w-96 ">
          </p>
          <button className='text-white flex flex-row pl-10 font-bold hover:text-yellow-500' onClick={serviceButtonHandler}>See services &nbsp;<ArrowRightIcon className='w-5 h-5 text-xs pt-1' /></button>
        </div>
      </motion.div>
    }else if(state==='Develop') {
      return <motion.div key='serviceDiv' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
        <h2 className="text-3xl font-extrabold text-white" id="join-heading">
          <span className="text-xl font-normal">Service:</span> Development
        </h2>
        <ul className='text-white'>
        <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Consulting')}}
          >Phase 1. <span className='font-bold'>Consulting</span>
        </li>
        <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Brand')}}
          >Phase 2. <span className='font-bold'>Brand Identity & Positioning</span>
        </li>
          <li className='block w-full bg-white px-4 py-2 text-black border-b border-white rounded-t-md'
          >Phase 3. <span className='font-bold'>Development</span></li>
          <li>
            <ul className='grid lg:grid-cols-3 grid-cols-2 bg-white text-black rounded-b-md mb-2 pb-2'>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Domain & email</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Ongoing Literation</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Web & Mobile App</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Prototyping</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> eCommerce setup</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> API & Database</li>
            </ul>
          </li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Marketing')}}
          >Phase 4. <span className='font-bold'>Digital Products & Marketings</span></li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Support')}}
          >Phase 5. <span className='font-bold'>Continuing Support</span></li>
        </ul>
        <div className='flex flex-row justify-end flex-nowrap'>
          <p className="w-96 ">
          </p>
          <button className='text-white flex flex-row pl-10 font-bold hover:text-yellow-500' onClick={serviceButtonHandler}>See services &nbsp;<ArrowRightIcon className='w-5 h-5 text-xs pt-1' /></button>
        </div>
      </motion.div>
    }else if(state==='Marketing') {
      return <motion.div key='serviceDiv' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
        <h2 className="text-3xl font-extrabold text-white" id="join-heading">
          <span className="text-xl font-normal">Service:</span> Digital Products & Marketings
        </h2>
        <ul className='text-white'>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
              onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Consulting')}}
            >Phase 1. <span className='font-bold'>Consulting</span>
          </li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
              onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Brand')}}
            >Phase 2. <span className='font-bold'>Brand Identity & Positioning</span>
          </li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
              onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Develop')}}
            >Phase 3. <span className='font-bold'>Development</span>
          </li>
          <li className='block w-full bg-white px-4 py-2 text-black border-b border-white rounded-t-md'
          >Phase 4. <span className='font-bold'>Digital Products & Marketings</span></li>
          <li>
            <ul className='grid lg:grid-cols-3 grid-cols-2 bg-white text-black rounded-b-md mb-2 pb-2'>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> SEO Implementation</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> PPC Campaigns</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Email Marketings</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> SMS Services</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Google Analystics</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> SNS Ad Banners</li>
            </ul>
          </li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Support')}}
          >Phase 5. <span className='font-bold'>Continuing Support</span></li>
        </ul>
        <div className='flex flex-row justify-end flex-nowrap'>
          <p className="w-96 ">
          </p>
          <button className='text-white flex flex-row pl-10 font-bold hover:text-yellow-500' onClick={serviceButtonHandler}>See services &nbsp;<ArrowRightIcon className='w-5 h-5 text-xs pt-1' /></button>
        </div>
      </motion.div>
    }else if(state==='Support') {
      return <motion.div key='serviceDiv' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
        <h2 className="text-3xl font-extrabold text-white" id="join-heading">
          <span className="text-xl font-normal">Service:</span> Continuing Support
        </h2>
        <ul className='text-white'>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
              onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Consulting')}}
            >Phase 1. <span className='font-bold'>Consulting</span>
          </li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
              onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Brand')}}
            >Phase 2. <span className='font-bold'>Brand Identity & Positioning</span>
          </li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
              onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Develop')}}
            >Phase 3. <span className='font-bold'>Development</span>
          </li>
          <li className='block w-full bg-black px-4 py-2 text-white mb-2 border-b hover:bg-white hover:text-black'
            onMouseEnter={(e) => {mouseHoverEventHandler(e, 'Marketing')}}
          >Phase 4. <span className='font-bold'>Digital Products & Marketings</span></li>
          <li className='block w-full bg-white px-4 py-2 text-black border-b border-white rounded-t-md'
          >Phase 5. <span className='font-bold'>Continuing Support</span></li>
          <li>
            <ul className='grid lg:grid-cols-3 grid-cols-2 bg-white text-black rounded-b-md mb-2 pb-2'>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Maintenance</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Email/Call Support</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> On-site Support</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Service Renewals</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Upgrade Firmwares</li>
              <li className='px-2 py-2 flex flex-row'><CheckIcon className='w-5 h-5 text-gray-400 mr-1' /> Coaching Specialists</li>
            </ul>
          </li>
        </ul>
        <div className='flex flex-row justify-end flex-nowrap'>
          <p className="w-96 ">
          </p>
          <button className='text-white flex flex-row pl-10 font-bold hover:text-yellow-500' onClick={serviceButtonHandler}>See services &nbsp;<ArrowRightIcon className='w-5 h-5 text-xs pt-1' /></button>
        </div>
      </motion.div>
    }
  }

  const imageDispatch = (state) => {
    if(state==='Intro') {
      return <motion.img exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} key='serviceImg' className="object-cover object-center rounded-lg shadow-2xl" src='/img/Intro_Photo.jpg' alt='serviceImg' />
    }else if(state==='Consulting') {
      return <motion.img exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} key='serviceImg' className="object-cover object-center rounded-lg shadow-2xl" src='/img/Consulting_Photo.jpg' alt='serviceImg' />
    }else if(state==='Brand') {
      return <motion.img exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} key='serviceImg' className="object-cover object-center rounded-lg shadow-2xl" src='/img/Design_Photo.jpg' alt='serviceImg' />
    }else if(state==='Develop') {
      return <motion.img exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} key='serviceImg' className="object-cover object-center rounded-lg shadow-2xl" src='/img/Develop_Photo.jpg' alt='serviceImg' />
    }else if(state==='Marketing') {
      return <motion.img exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} key='serviceImg' className="object-scale-down object-center rounded-lg shadow-2xl bg-white pt-8 pr-4" src='/img/Digital-Marketing.png' alt='serviceImg' />
    }else if(state==='Support') {
      return <motion.img exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} key='serviceImg' className="object-cover object-center rounded-lg shadow-2xl bg-white" src='/img/Service_Photo.jpg' alt='serviceImg' />
    }
  }

  const mouseHoverEventHandler = (e, text) => {
    e.preventDefault();
    setCurrentSection(text)
  }

  const serviceButtonHandler = (e) => {
    e.preventDefault();
    console.log('button clicked')
    // TODO: navigate to ./service 
  }

  return (
    <div className="relative py-16 bg-white">
      <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
      <div className="max-w-7xl mx-auto bg-black lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                {imageDispatch(currentSection)}
              </div>
            </div>
          </div>
          <motion.div key='serviceDiv2' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className="relative bg-black lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-lg lg:grid lg:grid-cols-10 lg:items-center">
            <div className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
            </div>
            {contentDispatch(currentSection)}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Services;