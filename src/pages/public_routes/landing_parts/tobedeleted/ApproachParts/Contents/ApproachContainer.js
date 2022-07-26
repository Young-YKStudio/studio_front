import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import InitiateContent from './InitiateContent';
import DesignContent from './DesignContent';
import DevelopContent from './DevelopContent';
import OptimizeContent from './OptimizeContent';
import { toast } from 'react-toastify';

const tabs = [
  { name: 'Initiate', title: 'Investigating needs from client, plan executing deliverables' },
  { name: 'Design', title: 'Crafting user interfaces, brand identities, and persona from initiation' },
  { name: 'Development', title: 'Assemble deliverables, adding required technology, and deliver digital/physical products' },
  { name: 'Optimize', title: 'On-going supports and evolving digital products' },
]

const ApproachContainer = (props) => {

  // States
  const [ currentSection, setCurrentSection ] = useState('Design');

  // Handler
  const sectionButtonHandler = (e, input) => {
    console.log('clicked', input)
    if(input === 'Initiate') {
      setCurrentSection('Initiate')
    } else if(input === 'Design') {
      setCurrentSection('Design')
    } else if(input === 'Develop') {
      setCurrentSection('Develop')
    } else if(input === 'Optimize') {
      setCurrentSection('Optimize')
    }
  }

  const contentsDispatch = (state) => {
    if(state === 'Initiate') {
      return <InitiateContent />
    } else if(state === 'Design') {
      return <DesignContent />
    } else if(state === 'Develop') {
      return <DevelopContent />
    } else if(state === 'Optimize') {
      return <OptimizeContent />
    } else {
      toast.warn('Double check current page state');
      return null
    }
  }

  return (
    <div className="bg-white max-w-7xl mx-auto">
      <div className='px-4 py-4'>
        <h2 className='text-3xl font-extrabold py-4'>
          Our Service Process
        </h2>
        { currentSection === 'Initiate' ?
          <div 
          className='w-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-start align-middle'
          >
            <div className='flex flex-row border-b bg-black text-white rounded-t-md px-4 py-4 drop-shadow-md lg:w-4/12'>
              <div className='w-full'>
                <h6 className='font-bold text-2xl mb-2'><span className='font-medium text-lg'>Phase 1.</span> Initiate</h6>
                <p className='font-medium text-sm'>Investigating needs from client, plan executing deliverables</p>
              </div>
            </div>
            {contentsDispatch(currentSection)}
          </div>
        :
          <div 
          className='w-full  flex flex-col justify-start align-middle '
          onClick={(e) => {sectionButtonHandler(e, 'Initiate')}}
          >
            <div className='flex flex-row border-b bg-white text-black rounded-md px-4 py-4 drop-shadow-md cursor-pointer hover:bg-black hover:text-white'>
              <div className='w-4/5'>
                <h6 className='font-bold text-2xl mb-2'><span className='font-medium text-lg'>Phase 1.</span> Initiate</h6>
                <p className='font-medium text-sm'>Investigating needs from client, plan executing deliverables</p>
              </div>
              <div className='w-1/5 flex justify-end items-center'>
                <ChevronDownIcon className='w-7 h-7'/>
              </div>
            </div>
          </div>
        }
        { currentSection === 'Design' ?
          <div 
          className='w-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-start align-middle'
          >
            <div className='flex flex-row border-b bg-black text-white rounded-t-md px-4 py-4 drop-shadow-md lg:w-4/12'>
              <div className='w-full'>
                <h6 className='font-bold text-2xl mb-2'><span className='font-medium text-lg'>Phase 2.</span> Design</h6>
                <p className='font-medium text-sm'>Crafting relatable user expericence and client persona from initial meeting.</p>
              </div>
            </div>
            {contentsDispatch(currentSection)}
          </div>
        :
          <div 
          className='w-full  flex flex-col justify-start align-middle '
          onClick={(e) => {sectionButtonHandler(e, 'Design')}}
          >
            <div className='flex flex-row border-b bg-white text-black rounded-md px-4 py-4 drop-shadow-md cursor-pointer hover:bg-black hover:text-white'>
              <div className='w-4/5'>
                <h6 className='font-bold text-2xl mb-2'><span className='font-medium text-lg'>Phase 2.</span> Design</h6>
                <p className='font-medium text-sm'>Crafting relatable user expericence and client persona from initial meeting.</p>
              </div>
              <div className='w-1/5 flex justify-end items-center'>
                <ChevronDownIcon className='w-7 h-7'/>
              </div>
            </div>
          </div>
        }
        { currentSection === 'Develop' ?
          <div 
          className='w-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-start align-middle'
          >
            <div className='flex flex-row border-b bg-black text-white rounded-t-md px-4 py-4 drop-shadow-md lg:w-4/12'>
              <div className='w-full'>
                <h6 className='font-bold text-2xl mb-2'><span className='font-medium text-lg'>Phase 3.</span> Development</h6>
                <p className='font-medium text-sm'>Assemble deliverables, adding required technology, and deliver digital/physical products</p>
              </div>
            </div>
            {contentsDispatch(currentSection)}
          </div>
        :
          <div 
          className='w-full  flex flex-col justify-start align-middle '
          onClick={(e) => {sectionButtonHandler(e, 'Develop')}}
          >
            <div className='flex flex-row border-b bg-white text-black rounded-md px-4 py-4 drop-shadow-md cursor-pointer hover:bg-black hover:text-white'>
              <div className='w-4/5'>
                <h6 className='font-bold text-2xl mb-2'><span className='font-medium text-lg'>Phase 3.</span> Development</h6>
                <p className='font-medium text-sm'>Assemble deliverables, adding required technology, and deliver digital/physical products</p>
              </div>
              <div className='w-1/5 flex justify-end items-center'>
                <ChevronDownIcon className='w-7 h-7'/>
              </div>
            </div>
          </div>
        }
        { currentSection === 'Optimize' ?
          <div 
          className='w-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-start align-middle'
          >
            <div className='flex flex-row border-b bg-black text-white rounded-t-md px-4 py-4 drop-shadow-md lg:w-4/12'>
              <div className='w-full'>
                <h6 className='font-bold text-2xl mb-2'><span className='font-medium text-lg'>Phase 4.</span> Optimization</h6>
                <p className='font-medium text-sm'>On-going supports and evolving digital products</p>
              </div>
            </div>
            {contentsDispatch(currentSection)}
          </div>
        :
          <div 
          className='w-full  flex flex-col justify-start align-middle '
          onClick={(e) => {sectionButtonHandler(e, 'Optimize')}}
          >
            <div className='flex flex-row border-b bg-white text-black rounded-md px-4 py-4 drop-shadow-md cursor-pointer hover:bg-black hover:text-white '>
              <div className='w-4/5'>
                <h6 className='font-bold text-2xl mb-2'><span className='font-medium text-lg'>Phase 4.</span> Optimization</h6>
                <p className='font-medium text-sm'>On-going supports and evolving digital products</p>
              </div>
              <div className='w-1/5 flex justify-end items-center'>
                <ChevronDownIcon className='w-7 h-7'/>
              </div>
            </div>
          </div>
        }
      </div>

    </div>
  );
}
export default ApproachContainer;