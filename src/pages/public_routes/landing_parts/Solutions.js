import { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/outline';

const Solutions = (props) => {
  const [ windowSmaller, setWindowSmaller ] = useState(false);
  const [ windowH1, setWindowH1 ] = useState(false);
  const [ windowH2, setWindowH2 ] = useState(false);
  const [ windowH3, setWindowH3 ] = useState(false);
  const [ windowH4, setWindowH4 ] = useState(false);
  const [ windowH5, setWindowH5 ] = useState(false);
  const [ windowV1, setWindowV1 ] = useState(true);
  const [ windowV2, setWindowV2 ] = useState(false);
  const [ windowV3, setWindowV3 ] = useState(false);
  const [ windowV4, setWindowV4 ] = useState(false);
  const [ windowV5, setWindowV5 ] = useState(false);

  const horizontalPanelHandler = (e, panel) => {
    if (panel === 'panel1') {
      setWindowH1(!windowH1);
      setWindowH2(false);
      setWindowH3(false);
      setWindowH4(false);
      setWindowH5(false);
    } else if (panel === 'panel2') {
      setWindowH1(false);
      setWindowH2(!windowH2);
      setWindowH3(false);
      setWindowH4(false);
      setWindowH5(false);
    } else if (panel === 'panel3') {
      setWindowH1(false);
      setWindowH2(false);
      setWindowH3(!windowH3);
      setWindowH4(false);
      setWindowH5(false);
    } else if (panel === 'panel4') {
      setWindowH1(false);
      setWindowH2(false);
      setWindowH3(false);
      setWindowH4(!windowH4);
      setWindowH5(false);
    } else if (panel === 'panel5') {
      setWindowH1(false);
      setWindowH2(false);
      setWindowH3(false);
      setWindowH4(false);
      setWindowH5(!windowH5);
    }
  }

  const verticalPanelHandler = (e, panel) => {
    if (panel === 'panel1') {
      setWindowV1(!windowV1);
      setWindowV2(false);
      setWindowV3(false);
      setWindowV4(false);
      setWindowV5(false);
    } else if (panel === 'panel2') {
      setWindowV2(!windowV2);
      setWindowV1(false);
      setWindowV3(false);
      setWindowV4(false);
      setWindowV5(false);
    } else if (panel === 'panel3') {
      setWindowV3(!windowV3);
      setWindowV1(false);
      setWindowV2(false);
      setWindowV4(false);
      setWindowV5(false);
    } else if (panel === 'panel4') {
      setWindowV4(!windowV4);
      setWindowV1(false);
      setWindowV2(false);
      setWindowV3(false);
      setWindowV5(false);
    } else if (panel === 'panel5') {
      setWindowV5(!windowV5);
      setWindowV1(false);
      setWindowV2(false);
      setWindowV3(false);
      setWindowV4(false);
    }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">Solutions</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Investigate, Design, Execution.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We define categories and helping ambitious orgarnizations to move at the speed of culture. 
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We also targets sepecified business markets to support the best of technology experiences and satisfaction.
          </p>
        </div>
        {windowSmaller ?
          <div 
            className='flex flex-col mt-6'
            key='vertical'
          >
            {windowH1 ?
              <motion.div
                animate={{ height: 500 }}
                exit={{
                  transition: { delay: 0.7, duration: 1 }
                }}
                onClick={(e) => {horizontalPanelHandler(e, 'panel1')}}
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
                id='Hpanel1'
                onClick={(e) => {horizontalPanelHandler(e, 'panel1')}}
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
            {windowH2 ?
              <motion.div
                initial={{ height: 200}}
                animate={{ height: 500 }}
                exit={{
                  transition: { delay: 0.7, duration: 1 }
                }}
                onClick={(e) => {horizontalPanelHandler(e, 'panel2')}}
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
                onClick={(e) => {horizontalPanelHandler(e, 'panel2')}}
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
            {windowH3 ?
              <motion.div
                initial={{ height: 200}}
                animate={{ height: 500 }}
                exit={{
                  transition: { delay: 0.7, duration: 1 }
                }}
                onClick={(e) => {horizontalPanelHandler(e, 'panel3')}}
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
                onClick={(e) => {horizontalPanelHandler(e, 'panel3')}}
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
            {windowH4 ?
              <motion.div
                initial={{ height: 200}}
                animate={{ height: 500 }}
                exit={{
                  transition: { delay: 0.7, duration: 1 }
                }}
                onClick={(e) => {horizontalPanelHandler(e, 'panel4')}}
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
                onClick={(e) => {horizontalPanelHandler(e, 'panel4')}}
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
            {windowH5 ?
              <motion.div
                initial={{ height: 200}}
                animate={{ height: 500 }}
                exit={{
                  transition: { delay: 0.7, duration: 1 }
                }}
                onClick={(e) => {horizontalPanelHandler(e, 'panel5')}}
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
                onClick={(e) => {horizontalPanelHandler(e, 'panel5')}}
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
          <div className='flex flex-row w-full mt-12' key='horizontal'>
            {windowV1 ?
              <motion.div
                initial={{ width: '20%' }}
                animate={{ width: '70%' }}
                exit={{ transition: { delay: 0.7, duration: 1 }}}
                onClick={(e) => {verticalPanelHandler(e, 'panel1')}}
              >
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='flex flex-col-reverse w-full h-full bg-Consulting bg-center bg-cover bg-yellow-600 bg-blend-multiply px-4 py-6 text-white'
                >
                  <div className='px-4'>
                    <p className='text-sm font-light'>Phase 1.</p>
                    <p className='text-4xl font-extrabold'>Consulting</p>
                    <p className='text-sm font-medium pb-3 border-b border-white'>Investigate, Estimate, Plan, Initial Meeting.</p>
                  </div>
                  <div className='flex flex-col justify-between h-full'>
                    <div>
                      <p className='text-white px-4 py-6 font-bold'>From the reqeusted inquiry, we investigate what we can help your business to grow, come up with digital/physical products of service, and get an estimation of the plan.</p>
                      <a href='/construction' className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
                    </div>
                    <div>
                      <p className='pl-4 pt-4 text-white font-bold'>Solution includes:</p>
                      <ul className='grid grid-cols-2 text-white mb-2 pb-2'>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Examine requirements</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Price Quotes</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Lead Time Quotes</li>
                        <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 text-white mr-1' /> Breif introductions</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              :
              <motion.div
                onClick={(e) => {verticalPanelHandler(e, 'panel1')}}
                style={{ width: '20%', height: '55vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: '2em', color: 'rgb(200,200,200)'}}
                whileHover={{ cursor: 'pointer', color: 'rgb(0,0,0)' }}
              >
                <p className='rotate-180 text-sm font-light h-full' style={{ writingMode: 'vertical-rl' }}>Phase 1.</p>
                <p className='rotate-180 text-4xl font-extrabold h-full' style={{ writingMode: 'vertical-rl' }}>Consulting</p>
                <p className='rotate-180 font-medium border-l pl-3 h-full' style={{ writingMode: 'vertical-rl' }}>Investigate, Estimate, Plan, Initial Meeting.</p>
              </motion.div>
            }
            {windowV2 ?
              <motion.div
                initial={{ width: '20%' }}
                animate={{ width: '70%' }}
                exit={{ transition: { delay: 0.7, duration: 1 }}}
                onClick={(e) => {verticalPanelHandler(e, 'panel2')}}
              >
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='flex flex-col-reverse w-full h-full bg-Design bg-center bg-cover bg-blue-600 bg-blend-multiply px-4 py-6 text-white'
                >
                  <div className='px-4'>
                    <p className='text-sm font-light'>Phase 2.</p>
                    <p className='text-4xl font-extrabold'>Brand Identity</p>
                    <p className='text-sm font-medium pb-3 border-b border-white'>Visual Branding, UX|UI design, Content Strategy, 2nd Meeting.</p>
                  </div>
                  <div className='flex flex-col justify-between h-full'>
                    <div>
                      <p className='text-white px-4 py-6 font-bold'>From the initial meeting, We culivate new ideas to connecting the dots, plan development strategy. Build the customer's personal brnad, provide printing products, and confirming UI/UX design.</p>
                      <a href='/construction' className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
                    </div>
                    <div>
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
                  </div>
                </motion.div>
              </motion.div>
              :
              <motion.div
                onClick={(e) => {verticalPanelHandler(e, 'panel2')}}
                style={{ width: '20%', height: '55vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: '2em', color: 'rgb(200,200,200)'}}
                whileHover={{ cursor: 'pointer', color: 'rgb(0,0,0)' }}
              >
                <p className='rotate-180 text-sm font-light h-full' style={{ writingMode: 'vertical-rl' }}>Phase 2.</p>
                <p className='rotate-180 text-4xl font-extrabold h-full' style={{ writingMode: 'vertical-rl' }}>Brand Identity</p>
                <p className='rotate-180 font-medium border-l pl-3 h-full' style={{ writingMode: 'vertical-rl' }}>Visual Branding, UX|UI design, Content Strategy, 2nd Meeting.</p>
              </motion.div>
            }
            {windowV3 ?
              <motion.div
                initial={{ width: '20%' }}
                animate={{ width: '70%' }}
                exit={{ transition: { delay: 0.7, duration: 1 }}}
                onClick={(e) => {verticalPanelHandler(e, 'panel3')}}
              >
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='flex flex-col-reverse w-full h-full bg-Develop bg-center bg-cover bg-green-600 bg-blend-multiply px-4 py-6 text-white'
                >
                  <div className='px-4'>
                    <p className='text-sm font-light'>Phase 3.</p>
                    <p className='text-4xl font-extrabold'>Development</p>
                    <p className='text-sm font-medium pb-3 border-b border-white'>Manufacture, Prototype, Provide, 3rd Meeting.</p>
                  </div>
                  <div className='flex flex-col justify-between h-full'>
                    <div>
                      <p className='text-white px-4 py-6 font-bold'>After approval from 2nd meeting, we start manufacuring digital products: at the intersection of clarity, purpose, cultural relevance, and flawless technical execution.</p>
                      <a href='/construction' className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
                    </div>
                    <div>
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
                  </div>
                </motion.div>
              </motion.div>
              :
              <motion.div
                onClick={(e) => {verticalPanelHandler(e, 'panel3')}}
                style={{ width: '20%', height: '55vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: '2em', color: 'rgb(200,200,200)'}}
                whileHover={{ cursor: 'pointer', color: 'rgb(0,0,0)' }}
              >
                <p className='rotate-180 text-sm font-light h-full' style={{ writingMode: 'vertical-rl' }}>Phase 3.</p>
                <p className='rotate-180 text-4xl font-extrabold h-full' style={{ writingMode: 'vertical-rl' }}>Development</p>
                <p className='rotate-180 font-medium border-l pl-3 h-full' style={{ writingMode: 'vertical-rl' }}>Manufacture, Prototype, Provide, 3rd Meeting.</p>
              </motion.div>
            }
            {windowV4 ?
              <motion.div
                initial={{ width: '20%' }}
                animate={{ width: '70%' }}
                exit={{ transition: { delay: 0.7, duration: 1 }}}
                onClick={(e) => {verticalPanelHandler(e, 'panel4')}}
              >
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='flex flex-col-reverse w-full h-full bg-Marketing bg-center bg-cover bg-red-600 bg-blend-multiply px-4 py-6 text-white'
                >
                  <div className='px-4'>
                    <p className='text-sm font-light'>Phase 4.</p>
                    <p className='text-4xl font-extrabold'>Marketing</p>
                    <p className='text-sm font-medium pb-3 border-b border-white'>SEO, Advertising, Digital Marketings.</p>
                  </div>
                  <div className='flex flex-col justify-between h-full'>
                    <div>
                      <p className='text-white px-4 py-6 font-bold'>We provide category-defining advertising and marketing that connects brands with their customers. We use the power of creativity and storytelling to solve problems and deliver results.</p>
                      <a href='/construction' className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
                    </div>
                    <div>
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
                  </div>
                </motion.div>
              </motion.div>
              :
              <motion.div
                onClick={(e) => {verticalPanelHandler(e, 'panel4')}}
                style={{ width: '20%', height: '55vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: '2em', color: 'rgb(200,200,200)'}}
                whileHover={{ cursor: 'pointer', color: 'rgb(0,0,0)' }}
              >
                <p className='rotate-180 text-sm font-light h-full' style={{ writingMode: 'vertical-rl' }}>Phase 4.</p>
                <p className='rotate-180 text-4xl font-extrabold h-full' style={{ writingMode: 'vertical-rl' }}>Marketing</p>
                <p className='rotate-180 font-medium border-l pl-3 h-full' style={{ writingMode: 'vertical-rl' }}>SEO, Advertising, Digital Marketings.</p>
              </motion.div>
            }
            {windowV5 ?
              <motion.div
                initial={{ width: '20%' }}
                animate={{ width: '70%' }}
                exit={{ transition: { delay: 0.7, duration: 1 }}}
                onClick={(e) => {verticalPanelHandler(e, 'panel5')}}
              >
                <motion.div
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='flex flex-col-reverse w-full h-full bg-Service bg-center bg-cover bg-gray-600 bg-blend-multiply px-4 py-6 text-white'
                >
                  <div className='px-4'>
                    <p className='text-sm font-light'>Phase 5.</p>
                    <p className='text-4xl font-extrabold'>Continuing Support</p>
                    <p className='text-sm font-medium pb-3 border-b border-white'>Final Delivery, Education, Updates, Support.</p>
                  </div>
                  <div className='flex flex-col justify-between h-full'>
                    <div>
                      <p className='text-white px-4 py-6 font-bold'>We provide education for our customers, as well as excellent maintenance of the digital products. Also provide updates for the latest technology and always reachable support team.</p>
                      <a href='/construction' className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
                    </div>
                    <div>
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
                  </div>
                </motion.div>
              </motion.div>
              :
              <motion.div
                id='Vpanle1'
                onClick={(e) => {verticalPanelHandler(e, 'panel5')}}
                style={{ width: '20%', height: '55vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: '2em', color: 'rgb(200,200,200)'}}
                whileHover={{ cursor: 'pointer', color: 'rgb(0,0,0)' }}
              >
                <p className='rotate-180 text-sm font-light h-full' style={{ writingMode: 'vertical-rl' }}>Phase 5.</p>
                <p className='rotate-180 text-4xl font-extrabold h-full' style={{ writingMode: 'vertical-rl' }}>Continuing Support</p>
                <p className='rotate-180 font-medium border-l pl-3 h-full' style={{ writingMode: 'vertical-rl' }}>Final Delivery, Education, Updates, Support.</p>
              </motion.div>
            }
          </div>
        }
      </div>
    </div>
  );
}
export default Solutions;