import { ArrowRightIcon } from '@heroicons/react/solid';

const Catchy = (props) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">yk studio digital agency</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Modern experiences at affordable price.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          We approach every project with a purpose-built team of creative specialists, and yet still affordable to small businesses.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          From sketching brand identities to digital marketing, we take care our clients with top-notch reliability.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          We are proud to provide digital material to small business owners.  
          </p>
          <a
            href="/contact/form"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-yellow-600 hover:text-white sm:w-auto"
          >
            Free consulting&nbsp;&nbsp; <ArrowRightIcon className='w-5 h-5 text-xs' />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Catchy;