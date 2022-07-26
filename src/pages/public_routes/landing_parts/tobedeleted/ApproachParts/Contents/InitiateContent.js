import { CheckIcon } from '@heroicons/react/outline';

const InitiateContent = (props) => {
  return (
    <div className="rounded-b-md border-2 px-4 py-4 flex flex-col sm:flex-row sm:flex-wrap sm:w-full xl:w-8/12">
      <div className='w-full'>
        <p className='text-2xl font-extrabold pb-4 border-b-2 mb-6 '>Build digital & business strategy</p>
      </div>
      <div className='flex flex-row w-full mb-4'>
        <p className='font-light text-sm'>Deciding target audience, client's demand, tech suggestions and pricing after the initial meeting with clients </p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Web / eCommerce</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Contents & prototypes</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Wireframe setup</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>User persona initiation</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Mood Boarding</p>
      </div>
    </div>
  );
}
export default InitiateContent;