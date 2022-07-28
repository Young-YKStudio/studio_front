import { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { motion, useCycle } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/outline';

const Services = (props) => {
  const [ currentSection, setCurrentSection ] = useState('Intro');
  const [ windowSmaller, setWindowSmaller ] = useState(false);
  const [ window1, cycleOpen1 ] = useCycle(false, true);
  const [ window2, cycleOpen2 ] = useCycle(false, true);
  const [ window3, cycleOpen3 ] = useCycle(false, true);
  const [ window4, cycleOpen4 ] = useCycle(false, true);
  const [ window5, cycleOpen5 ] = useCycle(false, true);

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

  useEffect(() => {
    const handleSize = () =>{
      if (window.innerWidth < 640) {
        setWindowSmaller(true)
      } else { 
        setWindowSmaller(false)
      }
    } 
    handleSize();
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  },[])

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">Solutions</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Grow, 
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </div>
        {windowSmaller ?
          <div 
            className='flex flex-col mt-6'
          >
            {window1 ?
              <motion.div
                animate={{ height: 500 }}
                exit={{
                  transition: { delay: 0.7, duration: 1 }
                }}
                onClick={cycleOpen1}
              >
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='h-28 cursor-pointer'
                >
                  <div
                    className='flex flex-col text-center text-black border-b border-yellow-600 py-4'
                  >
                    <p className='text-sm font-light'>Phase 1.</p>
                    <p className='text-4xl font-extrabold'>Consulting</p>
                    <p className='text-sm font-medium mt-2'>Investigate, Estimate, Plan, Initial Meeting.</p>
                  </div>
                  <div className='bg-Consulting bg-yellow-600 h-96 bg-center bg-blend-multiply flex flex-col justify-center'>
                    <div className='border-b border-white pb-2'>
                      <p className='text-white px-4 py-6 font-bold'>From the reqeusted inquiry, we investigate what we can help your business to grow, come up with digital/physical products of service, and get an estimation of the plan.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <p className='pl-4 pt-4 text-white font-bold'>Solution includes:</p>
                      <ul className='grid grid-cols-2 text-white mb-2 pb-2'>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Examine requirements</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Price Quotes</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Lead Time Quotes</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Breif introductions</li>
                      </ul>
                    </div>
                    <div className='px-4 py-4 pt-2'>
                      <a href='/construction' className='w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            :
              <motion.div 
                onClick={cycleOpen1}
                className='h-28 px-4 py-4'
                whileHover={{ color: 'rgb(0,0,0)', cursor: 'pointer', borderBottom: '1px solid rgb(202,138,4)',  transition: { duration: 0.5 }}}
                style={{ color: 'rgb(200,200,200)', marginBottom: '1em', borderBottom: '1px solid rgb(200,200,200)'}}
              >
                <div
                  className='flex flex-col text-center'
                >
                  <p className='text-sm font-light'>Phase 1.</p>
                  <p className='text-4xl font-extrabold'>Consulting</p>
                  <p className='text-sm font-medium mt-2'>Investigate, Estimate, Plan, Initial Meeting.</p>
                </div>
              </motion.div>
            }
            {window2 ?
              <motion.div
                initial={{ height: 200}}
                animate={{ height: 500 }}
                exit={{
                  transition: { delay: 0.7, duration: 1 }
                }}
                onClick={cycleOpen2}
              >
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='h-28 cursor-pointer'
                >
                  <div
                    className='flex flex-col text-center text-black border-b border-yellow-600 py-4'
                  >
                    <p className='text-sm font-light'>Phase 2.</p>
                    <p className='text-4xl font-extrabold'>Brand Identity</p>
                    <p className='text-sm font-medium mt-2'>Visual Branding, UX|UI design, Content Strategy, 2nd Meeting.</p>
                  </div>
                  <div className='bg-Design bg-blue-600 h-96 bg-center bg-blend-multiply flex flex-col justify-center'>
                    <div className='border-b border-white pb-2'>
                      <p className='text-white px-4 py-6 font-bold'>From the initial meeting, We culivate new ideas to connecting the dots, plan development strategy. Build the customer's personal brnad, provide printing products, and confirming UI/UX design.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <p className='pl-4 pt-4 text-white font-bold'>Solution includes:</p>
                      <ul className='grid grid-cols-2 text-white mb-2 pb-2'>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Brand Strategy</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Logo Design</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Photo | Video taking</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Visual Hierarchy</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Printing Products</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> UI | UX </li>
                      </ul>
                    </div>
                    <div className='px-4 py-4 pt-2'>
                      <a href='/construction' className='w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            :
              <motion.div 
                onClick={cycleOpen2}
                className='h-28 px-4 py-4'
                whileHover={{ color: 'rgb(0,0,0)', cursor: 'pointer', borderBottom: '1px solid rgb(202,138,4)',  transition: { duration: 0.5 }}}
                style={{ color: 'rgb(200,200,200)', marginBottom: '1em', borderBottom: '1px solid rgb(200,200,200)'}}
              >
                <div
                  className='flex flex-col text-center'
                >
                  <p className='text-sm font-light'>Phase 2.</p>
                  <p className='text-4xl font-extrabold'>Brand Identity</p>
                  <p className='text-sm font-medium mt-2'>Visual Branding, UX|UI design, Content Strategy, 2nd Meeting.</p>
                </div>
              </motion.div>
            }
            {window3 ?
              <motion.div
                initial={{ height: 200}}
                animate={{ height: 500 }}
                exit={{
                  transition: { delay: 0.7, duration: 1 }
                }}
                onClick={cycleOpen3}
              >
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='h-28 cursor-pointer'
                >
                  <div
                    className='flex flex-col text-center text-black border-b border-yellow-600 py-4'
                  >
                    <p className='text-sm font-light'>Phase 3.</p>
                    <p className='text-4xl font-extrabold'>Development</p>
                    <p className='text-sm font-medium mt-2'>Manufacture, Prototype, Provide, 3rd Meeting.</p>
                  </div>
                  <div className='bg-Develop bg-green-600 h-96 bg-center bg-cover bg-blend-multiply flex flex-col justify-center'>
                    <div className='border-b border-white pb-2'>
                      <p className='text-white px-4 py-6 font-bold'>After approval from 2nd meeting, we start manufacuring digital products: at the intersection of clarity, purpose, cultural relevance, and flawless technical execution.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <p className='pl-4 pt-4 text-white font-bold'>Solution includes:</p>
                      <ul className='grid grid-cols-2 text-white mb-2 pb-2'>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Domains & email</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Web & Mobile App</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Prototyping</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Payment Gateways</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> API & Database</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> eCommerce Intergration</li>
                      </ul>
                    </div>
                    <div className='px-4 py-4 pt-2'>
                      <a href='/construction' className='w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            :
              <motion.div 
                onClick={cycleOpen3}
                className='h-28 px-4 py-4'
                whileHover={{ color: 'rgb(0,0,0)', cursor: 'pointer', borderBottom: '1px solid rgb(202,138,4)',  transition: { duration: 0.5 }}}
                style={{ color: 'rgb(200,200,200)', marginBottom: '1em', borderBottom: '1px solid rgb(200,200,200)'}}
              >
                <div
                  className='flex flex-col text-center'
                >
                  <p className='text-sm font-light'>Phase 3.</p>
                  <p className='text-4xl font-extrabold'>Development</p>
                  <p className='text-sm font-medium mt-2'>Manufacture, Prototype, Provide, 3rd Meeting.</p>
                </div>
              </motion.div>
            }
            {window4 ?
              <motion.div
                initial={{ height: 200}}
                animate={{ height: 500 }}
                exit={{
                  transition: { delay: 0.7, duration: 1 }
                }}
                onClick={cycleOpen4}
              >
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='h-28 cursor-pointer'
                >
                  <div
                    className='flex flex-col text-center text-black border-b border-yellow-600 py-4'
                  >
                    <p className='text-sm font-light'>Phase 4.</p>
                    <p className='text-4xl font-extrabold'>Marketing</p>
                    <p className='text-sm font-medium mt-2'>SEO, Advertising, Digital Marketings.</p>
                  </div>
                  <div className='bg-Marketing bg-red-600 h-96 bg-cover bg-[center_right_1em] bg-blend-multiply flex flex-col justify-center'>
                    <div className='border-b border-white pb-2'>
                      <p className='text-white px-4 py-6 font-bold'>We provide category-defining advertising and marketing that connects brands with their customers. We use the power of creativity and storytelling to solve problems and deliver results.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <p className='pl-4 pt-4 text-white font-bold'>Solution includes:</p>
                      <ul className='grid grid-cols-2 text-white mb-2 pb-2'>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> SEO Implementation</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> SSL Certification</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Email / SMS Marketing</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> PPC Campaigns</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> SNS banner Ads</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Influencer Marketings</li>
                      </ul>
                    </div>
                    <div className='px-4 py-4 pt-2'>
                      <a href='/construction' className='w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            :
              <motion.div 
                onClick={cycleOpen4}
                className='h-28 px-4 py-4'
                whileHover={{ color: 'rgb(0,0,0)', cursor: 'pointer', borderBottom: '1px solid rgb(202,138,4)',  transition: { duration: 0.5 }}}
                style={{ color: 'rgb(200,200,200)', marginBottom: '1em', borderBottom: '1px solid rgb(200,200,200)'}}
              >
                <div
                  className='flex flex-col text-center'
                >
                  <p className='text-sm font-light'>Phase 4.</p>
                  <p className='text-4xl font-extrabold'>Marketing</p>
                  <p className='text-sm font-medium mt-2'>Investigate, estimate, plan, Initial Meeting.</p>
                </div>
              </motion.div>
            }
            {window5 ?
              <motion.div
                initial={{ height: 200}}
                animate={{ height: 500 }}
                exit={{
                  transition: { delay: 0.7, duration: 1 }
                }}
                onClick={cycleOpen5}
              >
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='h-28 cursor-pointer'
                >
                  <div
                    className='flex flex-col text-center text-black border-b border-yellow-600 py-4'
                  >
                    <p className='text-sm font-light'>Phase 5.</p>
                    <p className='text-4xl font-extrabold'>Continuing Support</p>
                    <p className='text-sm font-medium mt-2'>Final Delivery, Education, Updates, Support.</p>
                  </div>
                  <div className='bg-Service bg-gray-600 h-96 bg-center bg-blend-multiply flex flex-col justify-center'>
                    <div className='border-b border-white pb-2'>
                      <p className='text-white px-4 py-6 font-bold'>We provide education for our customers, as well as excellent maintenance of the digital products. Also provide updates for the latest technology and always reachable support team.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <p className='pl-4 pt-4 text-white font-bold'>Solution includes:</p>
                      <ul className='grid grid-cols-2 text-white mb-2 pb-2'>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Maintenance</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Email | Call Support</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> On-Site support</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Service Renewals</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Update support</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Coaching Specialists</li>
                      </ul>
                    </div>
                    <div className='px-4 py-4 pt-2'>
                      <a href='/construction' className='w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            :
              <motion.div 
                onClick={cycleOpen5}
                className='h-28 px-4 py-4'
                whileHover={{ color: 'rgb(0,0,0)', cursor: 'pointer', borderBottom: '1px solid rgb(202,138,4)',  transition: { duration: 0.5 }}}
                style={{ color: 'rgb(200,200,200)', marginBottom: '1em', borderBottom: '1px solid rgb(200,200,200)'}}
              >
                <div
                  className='flex flex-col text-center'
                >
                  <p className='text-sm font-light'>Phase 5.</p>
                  <p className='text-4xl font-extrabold'>Continuing Support</p>
                  <p className='text-sm font-medium mt-2'>Final Delivery, Education, Updates, Support.</p>
                </div>
              </motion.div>
            }
          </div>
          :
          <div>
            <div className='bg-gray-200 h-12'>1</div>
            <div className='bg-gray-300'>2</div>
            <div className='bg-gray-400'>3</div>
            <div className='bg-gray-500'>4</div>
            <div className='bg-gray-600'>5</div>
          </div>
        }
      </div>
    </div>
    // <div className="relative py-16 bg-white">
    //   <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
    //   <div className="max-w-7xl mx-auto bg-black lg:bg-transparent lg:px-8">
    //     <div className="lg:grid lg:grid-cols-12">
    //       <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
    //         <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
    //         <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
    //           <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
    //             {imageDispatch(currentSection)}
    //           </div>
    //         </div>
    //       </div>
    //       <motion.div key='serviceDiv2' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className="relative bg-black lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-lg lg:grid lg:grid-cols-10 lg:items-center">
    //         <div className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
    //         </div>
    //         {contentDispatch(currentSection)}
    //       </motion.div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Services;