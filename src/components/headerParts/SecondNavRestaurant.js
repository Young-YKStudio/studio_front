import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import './SecondNavRestaurant.css';
import { plans, solutions, enhancements } from '../../Data/SecondNav'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SecondNavRestaurant = (props) => {
  return (
    <nav className='flex flex-row items-center justify-center bg-gradient-to-b from-slate-100 to-white py-4 sticky top-0 z-20'>
      <a href='/solutions/restaurants/intro' className='navTitle'>Restaurants</a>
      <a href='/solutions/restaurants/pricing' className='text-base font-medium text-gray-500 hover:text-gray-900 mx-4'>Pricing</a>
      <Popover className="relative mx-8 my-2">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
              )}
            >
              <span>Plans</span>
              <ChevronDownIcon
                className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
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
              <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {plans.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Popover className="relative mx-4 my-2">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
              )}
            >
              <span>Enhancements</span>
              <ChevronDownIcon
                className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
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
              <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {enhancements.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

    </nav>
  );
}
export default SecondNavRestaurant;