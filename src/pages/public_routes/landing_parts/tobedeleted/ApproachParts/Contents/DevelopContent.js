import { CheckIcon } from '@heroicons/react/outline';

const DevelopContent = (props) => {
  return (
    <div className="rounded-b-md border-2 px-4 py-4 flex flex-col sm:flex-row sm:flex-wrap sm:w-full xl:w-8/12">
      <div className='w-full'>
        <p className='text-2xl font-extrabold pb-4 border-b-2 mb-6 '>Crafting Web apps, mobile apps, and more for client demands for their business</p>
      </div>
      <div className='flex flex-row w-full mb-4'>
        <p className='font-light text-sm'>From the initial meeting, we determine  what kinds of service client demands. In this stage, we code the deliverables to meet the client's demands</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Website Development</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Mobile App Development</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Web Apps</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Complex Integrations</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>Platforms & Portals</p>
      </div>
      <div className='flex flex-row mb-4 sm:w-1/2 md:w-1/3 text-gray-500'>
        <CheckIcon className='w-6 h-6 mr-4' />
        <p className='font-medium text-md'>eCommverce implementation</p>
      </div>
    </div>
  );
}
export default DevelopContent;