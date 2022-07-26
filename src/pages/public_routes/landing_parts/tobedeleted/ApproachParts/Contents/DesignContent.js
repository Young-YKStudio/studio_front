import { CheckIcon } from '@heroicons/react/outline';

const DesignContent = (props) => {
  return (
    <div className="rounded-b-md border-2 px-4 py-4 flex flex-col sm:flex-row sm:flex-wrap sm:w-full xl:w-8/12">
      <div className='w-full'>
        <p className='text-2xl font-extrabold pb-4 border-b-2 mb-6 '>Design visual hierarchy, branding, and user persona</p>
      </div>
      <div className='flex flex-row w-full mb-4'>
        <p className='font-light text-sm'>Set your visual identity, which includes logo, color palette, brand font, and photography.</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Logo</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>UX | UI</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>mobile first web designs</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>User persona crafting</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Visual branding</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Printings</p>
      </div>
    </div>
  );
}
export default DesignContent;