import { CheckIcon } from '@heroicons/react/outline';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

const Custom = (props) => {
  return (
    <motion.div 
      key='solution2' exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .5 }}
      className='max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8'
    >
      <div className="flex flex-row flex-wrap">
        {/* Consulting */}
        <div className="w-full md:w-1/2 px-2 py-6 border-b border-yellow-600 md:border-none">
          <div className="px-4">
            <p className="text-sm font-light">
              Phase 1.
            </p>
            <p className="text-4xl font-extrabold">Consulting</p>
            <p className="text-sm font-medium pb-3 border-b border-gray-900">Investigate, Estimate, Plan, Initial Meeting.</p>
            <p className='pt-3'>From the reqeusted inquiry, we investigate what we can help your business to grow, come up with digital/physical products of service, and get an estimation of the plan.</p>
            <ul className='grid grid-cols-2 mb-2 pb-2 mt-3'>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Examine requirements</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Price Quotes</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Lead Time Quotes</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Brief introductions</li>
            </ul>
            <a href='/construction' className='inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-black hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-Consulting bg-center bg-cover">
        </div>
        {/* Design */}
        <div className="w-full md:w-1/2 bg-Design bg-center bg-cover">
        </div>
        <div className="w-full md:w-1/2 px-2 py-6 border-b border-yellow-600 md:border-none">
          <div className="px-4">
            <p className="text-sm font-light">
              Phase 2.
            </p>
            <p className="text-4xl font-extrabold">Brand Identity</p>
            <p className="text-sm font-medium pb-3 border-b border-gray-900">Visual Branding, UX|UI design, Content Strategy, 2nd Meeting.</p>
            <p className='pt-3'>From the initial meeting, We culivate new ideas to connecting the dots, plan development strategy. Build the customer's personal brnad, provide printing products, and confirming UI/UX design.</p>
            <ul className='grid grid-cols-2 mb-2 pb-2 mt-3'>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Brand Strategy</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Logo Design</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Photo | Video taking</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Visual Hierarchy</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Printing Products</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> UI | UX</li>
            </ul>
            <a href='/construction' className='inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-black hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
          </div>
        </div>
        {/* Develop */}
        <div className="w-full md:w-1/2 px-2 py-6 border-b border-yellow-600 md:border-none">
          <div className="px-4">
            <p className="text-sm font-light">
              Phase 3.
            </p>
            <p className="text-4xl font-extrabold">Development</p>
            <p className="text-sm font-medium pb-3 border-b border-gray-900">Manufacture, Prototype, Provide, 3rd Meeting.</p>
            <p className='pt-3'>After approval from 2nd meeting, we start manufacuring digital products: at the intersection of clarity, purpose, cultural relevance, and flawless technical execution.</p>
            <ul className='grid grid-cols-2 mb-2 pb-2 mt-3'>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Domains & email</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Web & Mobile App</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Prototyping</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Payment Gateways</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> API & Database</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> eCommerce Intergration</li>
            </ul>
            <a href='/construction' className='inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-black hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-Develop bg-center bg-cover">
        </div>
        {/* Marketing */}
        <div className="w-full md:w-1/2 bg-Marketing bg-center bg-cover">
        </div>
        <div className="w-full md:w-1/2 px-2 py-6 border-b border-yellow-600 md:border-none">
          <div className="px-4">
            <p className="text-sm font-light">
              Phase 4.
            </p>
            <p className="text-4xl font-extrabold">Marketing</p>
            <p className="text-sm font-medium pb-3 border-b border-gray-900">SEO, Advertising, Digital Marketings.</p>
            <p className='pt-3'>We provide category-defining advertising and marketing that connects brands with their customers. We use the power of creativity and storytelling to solve problems and deliver results.</p>
            <ul className='grid grid-cols-2 mb-2 pb-2 mt-3'>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> SEO Implementation</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> SSL Certification</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Email / SMS Marketing</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> PPC Campaigns</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> SNS Marketing</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Influencer Marketing</li>
            </ul>
            <a href='/construction' className='inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-black hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
          </div>
        </div>
        {/* Develop */}
        <div className="w-full md:w-1/2 px-2 py-6 border-b border-yellow-600 md:border-none">
          <div className="px-4">
            <p className="text-sm font-light">
              Phase 5.
            </p>
            <p className="text-4xl font-extrabold">Continuing Support</p>
            <p className="text-sm font-medium pb-3 border-b border-gray-900">Final Delivery, Education, Updates, Support.</p>
            <p className='pt-3'>We provide education for our customers, as well as excellent maintenance of the digital products. Also provide updates for the latest technology and always reachable support team.</p>
            <ul className='grid grid-cols-2 mb-2 pb-2 mt-3'>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Maintenance</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Email | Call Support</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> On-Site Support</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Service Renewals</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Update Support</li>
              <li className='px-4 py-2 flex flex-row text-sm font-medium'><CheckIcon className='w-5 h-5 mr-1' /> Coaching Specialists</li>
            </ul>
            <a href='/construction' className='inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-black hover:text-white hover:bg-yellow-600'>Find out more<ArrowRightIcon className='w-5 h-5 mt-0.5 ml-2'/></a>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-Service bg-center bg-cover">
        </div>
      </div>
    </motion.div>
  );
}
export default Custom;