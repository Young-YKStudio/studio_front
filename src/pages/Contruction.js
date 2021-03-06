import { motion } from 'framer-motion';

const Construction = (props) => {
  return (
    <motion.div
      className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
      key='construction'
      exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: .5 }}
    >
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-yellow-600 sm:text-5xl">Oops!</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page is under construction</h1>
              <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-yellow-600"
              >
                Go back home
              </a>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
export default Construction;