import { ArrowRightIcon } from '@heroicons/react/solid';

const Catchy = (props) => {
  return (
    <div className="bg-white">
      <div>
        <div className="max-w-2xl mx-auto text-center py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block text-lg font-light mb-4">YK Studio Digital Agency</span>
            <span className="block">Modern experiences to small business at affordable price.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-400">
          We approach every project with a purpose-built team of creative specialists, and yet still affordable to small businesses.
          </p>
          <p className="mt-4 text-lg leading-6 text-gray-400">
          From sketching brand identities to digital marketing, we take care our clients with top-notch reliability.
          </p>
          <p className="mt-4 text-lg leading-6 text-gray-400">
          We are proud to provide digital material to small business owners.  
          </p>
          <a
            href="/contact/form"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-yellow-600 hover:text-white sm:w-auto"
          >
            Free consulting&nbsp;&nbsp; <ArrowRightIcon className='w-5 h-5 text-xs' />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Catchy;