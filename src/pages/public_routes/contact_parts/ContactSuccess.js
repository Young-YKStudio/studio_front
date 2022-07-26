import { motion } from 'framer-motion';

const ContactSuccess = (props) => {
  return (
    <motion.div 
      className="bg-white"
      exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .5 }}
    >
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Thank you for your inquiry!</h1>
          <p className="mt-4 text-xl text-white">
            It is great to hear from you! We appreciate the time you took to inquire about our services. After having reviewed your request, we will contact you via entered email as soon as possible. Thank you again.
          </p>
          <a
            href="/"
            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-yellow-600"
          >
            Go back
          </a>
        </div>
      </div>
    </motion.div>
  );
}
export default ContactSuccess;