import { MdOutlineCottage, MdOutlineFastfood, MdCalendarToday, MdMailOutline, MdMenuBook, MdQueryStats, MdSettings, MdFirstPage, MdLastPage, MdOutlineSwapHoriz } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const navigation = [
  { name: 'Store', icon: MdOutlineCottage, href: '#', current: false },
  { name: 'Orders', icon: MdOutlineFastfood, href: '#', count: 12, current: true },
  { name: 'Reservations', icon: MdCalendarToday, href: '#', count: 3, current: false },
  { name: 'Marketing', icon: MdMailOutline, href: '#', current: false },
  { name: 'Menu Settings', icon: MdMenuBook, href: '#', current: false },
  { name: 'Statistics', icon: MdQueryStats, href: '#', current: false },
  { name: 'Settings', icon: MdSettings, href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DemoFBStarter_Dashboard_Header = ({setCurrentPage, currentPage }) => {

  const [ sideBarOpen, setSideBarOpen ] = useState(true);

  const pageSetter = (e, page) => {
    setCurrentPage(`${page}`)
  }

  const navigate = useNavigate();

  const navigateToStore = (e) => {
    navigate('/demo_fb_starter');
  }

  const sideBarHandler = (e) => {
    setSideBarOpen(!sideBarOpen);
  }

  const homeFilterLg = (item) => {
    if (item.name === 'Store') {
      return <div key={item.name} className='flex flex-row justify-between'>
        <p
        onClick={(e) => navigateToStore(e)}
        className='text-gray-900 hover:text-white hover:bg-red-800 group flex items-center px-2 py-2 text-sm font-medium rounded-md'
        >
          <item.icon
            className='text-gray-900 group-hover:text-white mr-3 flex-shrink-0 h-6 w-6'
            aria-hidden='true'
          />
          <span className='flex-1'>{item.name}</span>
        </p>
        <button onClick={sideBarHandler}>
          {
            sideBarOpen ?
            <MdFirstPage className='w-10 h-10 p-2 hover:bg-red-800 hover:text-white rounded-md border-white border-1 text-gray-900' />

            :
            
            <MdLastPage className='w-12 h-7 hover:bg-white hover:text-red-800 rounded-md border-white border-1 text-white' />
          }
        </button>
      </div>
    } else {
      return <p
        key={item.name}
        onClick={(e) => pageSetter(e, `${item.name}`)}
        className={classNames(
          item.name === currentPage
            ? 'bg-red-800 text-white'
            : 'text-gray-700 hover:text-white hover:bg-red-800',
          'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
        )}
      >
        <item.icon
          className={classNames(
            item.name === currentPage ? 'text-white' : 'text-gray-700 group-hover:text-white',
            'mr-3 flex-shrink-0 h-6 w-6'
          )}
          aria-hidden="true"
        />
        <span className="flex-1">{item.name}</span>
        {item.count ? (
          <span
            className={classNames(
              item.name === currentPage ? 'bg-white text-red-800 border-1 border-red-800' : 'bg-red-800 group-hover:bg-white text-white group-hover:text-red-800',
              'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
            )}
          >
            {item.count}
          </span>
        ) : null}
      </p>
    }
  }

  const homeFilterSm = (item) => {
    if (item.name === 'Store') {
      return <div key={item.name} className='flex flex-col justify-center items-center'>
        <button onClick={sideBarHandler}>
          {
            sideBarOpen ?
            <MdFirstPage className='w-10 h-10 p-1 mb-1 hover:bg-red-800 hover:text-white rounded-md border-white border-1 text-gray-800' />
            :
            <MdLastPage className='w-10 h-10 p-1 mb-1 hover:bg-red-800 hover:text-white rounded-md border-white border-1 text-gray-800' />
          }
        </button>
        <p
        onClick={(e) => navigateToStore(e)}
        className='text-gray-100 hover:text-gray-900 hover:bg-red-800 group flex items-center justify-center px-2 py-2 text-sm font-medium rounded-md'
        >
          <item.icon
            className='text-gray-800 group-hover:text-white flex-shrink-0 h-6 w-6'
            aria-hidden='true'
          />
        </p>
      </div>
    } else {
      return <div key={item.name} className='flex justify-center'>
        <p
          key={item.name}
          onClick={(e) => pageSetter(e, `${item.name}`)}
          className={classNames(
            item.name === currentPage
              ? 'bg-red-800'
              : 'text-white hover:text-white hover:bg-red-800',
            'group flex px-2 py-2 text-sm font-medium rounded-md'
          )}
        >
          <item.icon
            className={classNames(
              item.name === currentPage ? 'text-white' : 'text-gray-800 group-hover:text-white',
              'flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
        </p>
        {
          item.name === currentPage ? null
          :
          item.count ? 
          <div>
            <p className='text-red-800'>•</p>
          </div>
          : null
        }
      </div>
    }
  }

  return (
    <>
      <div className='h-screen bg-red-800 px-3 py-6'>
        <div className="flex min-h-0 flex-1 flex-col rounded-lg border-2 border-gray-300 bg-white h-full">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">

            {/* TODO: should be changed according to the states */}
            <div className="flex flex-shrink-0 items-center px-4 justify-center">
              <p className='text-xl font-bold text-red-800'>
                { sideBarOpen? "Restaurant Logo" : "RL" }
              </p>
            </div>
            <nav className="mt-5 flex-1 space-y-1 bg-white px-4" aria-label="Sidebar">
              { sideBarOpen ? navigation.map((item) => (
                homeFilterLg(item)   
              ))
              :
                navigation.map((item) => (
                  homeFilterSm(item)
                ))
              }
            </nav>

          </div>
        </div>
      </div>
    </>
  );
}
export default DemoFBStarter_Dashboard_Header;