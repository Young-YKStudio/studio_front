import { ArrowRightIcon } from '@heroicons/react/solid';

const Contact = (props) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto text-center py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block text-lg font-light mb-4">Contact Us:</span>
          <span className="block">Let the experts build you<br /> the site of your dreams.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-400">
        We provide customized digital products and online experices from client's expectations and plans to achieve and grow business together.
        </p>
        <a
          href="/contact/form"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-yellow-600 hover:text-white sm:w-auto"
        >
          Contact Us&nbsp;&nbsp; <ArrowRightIcon className='w-5 h-5 text-xs' />
        </a>
      </div>
    </div>
  );
}
export default Contact;