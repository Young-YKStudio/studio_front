import { useState } from 'react';

import DemoHeader from '../DemoFBStarter_Header';
import DemoFooter from '../DemoFBStarter_Footer';
import MenuSpecials from './menuParts/MenuSpecials';
import MenuBbq from './menuParts/MenuBbq';
import MenuCatering from './menuParts/MenuCatering';

const MenuLanding = (props) => {

  const [ currentPage, setCurrentPage ] = useState(1)

  const setPage = (e, id) => {
    setCurrentPage(id)
  }

  const pageButtons = (page, id) => {
    if (page.id === currentPage) {
      return <li>
        <button 
          className='flex justify-center border-2 px-4 py-2 mx-2 border-white bg-white text-red-800 font-bold'
          key={page.id}
        >
          {page.name}
        </button>
      </li>
    } else {
      return <li>
        <button 
          className='flex justify-center border-2 px-4 py-2 mx-2 border-white bg-red-800 text-white font-bold hover:bg-white hover:text-red-800'
          onClick={(e) => setPage(e, id)}
          key={page.id}
        >
          {page.name}
        </button>
      </li>
    }
  }

  const links = [
    {
      name: 'Specials',
      id: 1
    },
    {
      name: 'BBQ',
      id: 2
    },
    {
      name: 'Catering',
      id: 3
    }
  ]

  const pageSetter = (pageNum) => {
    if (pageNum === 1) {
      return <MenuSpecials />
    } else if (pageNum === 2) {
      return <MenuBbq />
    } else if (pageNum === 3) {
      return <MenuCatering />
    } else {
      return null
    }
  }

  return (
    <div className='font-arvo'>
      <DemoHeader />
      <div className="flex flex-col justify-start font-arvo items-center bg-red-700 text-white">
        <div className='mt-24 w-2/5 flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-extrabold p-10 mt-4'>MENU</h1>
          <p className=''>A culinary tour of BBQ traditions from around this great nation and this beautiful planet. 1.8 million years ago, humans first began cooking meat with fire. For some reason, this hasn’t led to world peace, but we’re pretty sure if we fire up enough BBQ, it will.</p>
          <ul className='flex flex-row justify-center py-20'>
            {links.map((link) => {
              return <div key={link.id}>
                {pageButtons(link, link.id)}
              </div>
            })}
          </ul>
        </div>
        {pageSetter(currentPage)}
      </div>
      <DemoFooter />
    </div>
  );
}
export default MenuLanding;