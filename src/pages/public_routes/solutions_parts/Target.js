import { CheckIcon, ChevronRightIcon, MinusSmIcon } from '@heroicons/react/outline';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

const Target = (props) => {
  return (
    <motion.div 
      key='solution3' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .5 }}
      className='max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8'
    >
      <div className='flex flex-row flex-wrap'>
        {/* Restaurant */}
        <div className="w-full md:w-1/2 px-2 py-6 border-b border-yellow-600 md:border-none">
          <div className="px-4">
            <p className="text-sm font-light">
              Package 1.
            </p>
            <p className="text-4xl font-extrabold">Restaurant & Cafe</p>
            <p className="text-sm font-medium pb-3 border-b border-gray-900">Online orders, Online Payments, Reservations, all-in-one.</p>
            <p className='pt-3'>We know restaurants because we love restaurants - We listen to restaurant owners what are the challenges and resolving them through approachable technology and a strong sense of empathy.</p>
            <ul className='flex flex-col mb-2 pb-2 mt-3'>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> F&B Starter</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> F&B Pro</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> F&B Customized</li>
            </ul>
            <a href='/solutions/restaurants/intro' className='inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-black hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-Restaurant bg-center bg-cover">
        </div>
        {/* nail | hair */}
        <div className="w-full md:w-1/2 bg-Hair bg-center bg-cover">
        </div>
        <div className="w-full md:w-1/2 px-2 py-6 border-b border-yellow-600 md:border-none">
          <div className="px-4">
            <p className="text-sm font-light">
              Package 2.
            </p>
            <p className="text-4xl font-extrabold">Nail & Hair salon</p>
            <p className="text-sm font-medium pb-3 border-b border-gray-900">Our website can provide timeline openings for each designer. </p>
            <p className="pt-3">Managing reservations can be difficult. We can help you handle schedules easily. Your customer can make their reservation according to their designer preferences, styles, and time openings.</p>
            <ul className='flex flex-col mb-2 pb-2 mt-3'>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> Salon Package - Starter</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> Salon Package - Pro</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> Salon Package - Unlimited</li>
            </ul>
            <a href='/solutions/nail&hair' className='inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-black hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
          </div>
        </div>
        {/* ecommerce */}
        <div className="w-full md:w-1/2 px-2 py-6 border-b border-yellow-600 md:border-none">
          <div className="px-4">
            <p className="text-sm font-light">
              Phase 3.
            </p>
            <p className="text-4xl font-extrabold">eCommerce</p>
            <p className="text-sm font-medium pb-3 border-b border-gray-900">Stock management, Order management, Payment gateway</p>
            <p className='pt-3'>No more backdoor logins for manage your website. We can build your dream eCommerce website where you can easily manage your online business.</p>
            <ul className='flex flex-col mb-2 pb-2 mt-3'>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> eCommerce Package - Starter</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> eCommerce - Pro</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> eCommerce - Unlimited</li>
            </ul>
            <a href='/solutions/eCommerces' className='inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-black hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-eCommerce bg-center bg-cover">
        </div>
        {/* doctor */}
        <div className="w-full md:w-1/2 bg-Doctor bg-center bg-cover">
        </div>
        <div className="w-full md:w-1/2 px-2 py-6 border-b border-yellow-600 md:border-none">
          <div className="px-4">
            <p className="text-sm font-light">
              Phase 4.
            </p>
            <p className="text-4xl font-extrabold">Individual Practice</p>
            <p className="text-sm font-medium pb-3 border-b border-gray-900">Email & SMS Schedules, Online Reservations, Patient Database</p>
            <p className='pt-3'>Tired of calling patients for their appointments? What if you can inform your patients with one-click? Also we offer cloud storage database.</p>
            <ul className='flex flex-col mb-2 pb-2 mt-3'>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> Practices Package - Starter</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> Practices - Pro</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><MinusSmIcon className='w-5 h-5 mr-1' /> Practices - Unlimited</li>
            </ul>
            <a href='/solutions/practices' className='inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-black hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Target;