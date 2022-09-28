import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import './PublicHeader.css'
import { solutions, packages } from '../../Data/PublicHeader';
import { ArrowRightIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const PublicHeader = (props) => {
  // States

  // Handlers

  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a 
          href="/"
          className='flex flex-row'
          >
            <img
              className="h-8 w-auto sm:h-10"
              src="/img/YKlogo.png"
              alt="yk logo"
            />
            <span className="logo-title">Studio</span>
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
        <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-yellow-600' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-yellow-600 focus:outline-none focus:text-yellow-600'
                  )}
                >
                  <span>Packages</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-yellow-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-yellow-600'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {packages.map((pkg) => (
                          <a
                            key={pkg.name}
                            href={pkg.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-yellow-600 text-white sm:h-12 sm:w-12">
                              <pkg.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{pkg.name}</p>
                              <p className="mt-1 text-sm text-gray-500">{pkg.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="p-5 bg-gray-50 sm:p-8">
                        <a href="/solutions/solutions" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 text-gray-900 hover:text-yellow-600">
                          <div className="flex items-center">
                            <div className="text-base font-medium flex flex-row">See Packages in Detail<ArrowRightIcon className='w-4 h-4 mt-1 ml-2'/></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-yellow-600' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-yellow-600 focus:outline-none focus:text-yellow-600'
                  )}
                >
                  <span>Solutions</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-yellow-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-yellow-600'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {solutions.map((solution) => (
                          <a
                            key={solution.name}
                            href={solution.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-yellow-600 text-white sm:h-12 sm:w-12">
                              <solution.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{solution.name}</p>
                              <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="p-5 bg-gray-50 sm:p-8">
                        <a href="/solutions/solutions" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 text-gray-900 hover:text-yellow-600">
                          <div className="flex items-center">
                            <div className="text-base font-medium flex flex-row">See Solutions in Detail<ArrowRightIcon className='w-4 h-4 mt-1 ml-2'/></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>


          <a href="/construction" className="text-base font-medium text-gray-500 hover:text-yellow-600">
            Our Work
          </a>
          <a href="/contact/form" className="text-base font-medium text-gray-500 hover:text-yellow-600">
            Contact
          </a>

        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Sign in
          </a>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className='flex flex-row'>
                  <img
                    className="h-8 w-auto"
                    src="/img/YKlogo.png"
                    alt="YK logo"
                  />
                  <p className='logo-title'>Studio</p>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <h3 className='font-bold text-lg mb-4 border-b border-gray-400'>Solutions</h3>
                <nav className="grid grid-cols-2 gap-7 mt-6">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-yellow-600 text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{solution.name}</div>
                    </a>
                  ))}
                </nav>
                <h3 className='font-bold text-lg my-4 mt-8 border-b border-gray-400'>Packages</h3>
                <nav className="grid grid-cols-2 gap-7 mt-6">
                  {packages.map((pkg) => (
                    <a
                      key={pkg.name}
                      href={pkg.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-yellow-600 text-white">
                        <pkg.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{pkg.name}</div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="/construction" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Our Work
                </a>

                <a href="/construction" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Studio
                </a>
                <a href="/contact/form" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Contact
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="/login"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-yellow-600"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export default PublicHeader;