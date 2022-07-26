import { CheckIcon } from '@heroicons/react/outline';

const OptimizeContent = (props) => {
  return (
    <div className="rounded-b-md border-2 px-4 py-4 flex flex-col sm:flex-row sm:flex-wrap sm:w-full xl:w-8/12">
      <div className='w-full'>
        <p className='text-2xl font-extrabold pb-4 border-b-2 mb-6 '>Website Optimization and Supports</p>
      </div>
      <div className='flex flex-row w-full mb-4'>
        <p className='font-light text-sm'>Building online product is not the end. We provide on-going supports, and online marketing tools to your developments.</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Search Engine Optimization</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Google Analystics</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Maintenance & support</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>SNS Marketing</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>YouTube Marketing</p>
      </div>
    </div>
  );
}
export default OptimizeContent;