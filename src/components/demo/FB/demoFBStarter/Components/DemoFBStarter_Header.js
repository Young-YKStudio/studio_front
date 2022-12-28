import { useState } from 'react';
import { Demo_Button_Black } from './Button/button';

// DATA
// Header List
const lists = [
  {
    id: 0,
    name: 'Menus',
    href: '',
  },
  {
    id: 1,
    name: 'Locations',
    href: '',
  },
  {
    id: 2,
    name: 'Catering',
    href: '',
  },
  {
    id: 3,
    name: 'About',
    href: '',
  },
  {
    id: 4,
    name: 'Accounts',
    href: '',
  },
  {
    id: 5,
    name: 'Order Online',
    href: '',
  },
]

const DemoFBStarter_Header = (props) => {

  // STATES
  const [ selected, setSelected ] = useState(false);

  return (
    <div className="fixed w-full top-0 h-24 bg-yellow-400 flex flex-row items-center justify-between">
      <div className='pl-10'>
        <p className='font-bold text-2xl'>YOUR RESTAURANT LOGO</p>
      </div>
      <div className='pr-10'>
        <ul className='flex justify-end items-center'>
          {lists.map((list) => {
            if (list.id === 5) {
              return (
                <li key={list.id}><Demo_Button_Black link="#" text="Order Online" /></li>
              )
            } else {
              return (
                <li key={list.id}  className='m-2 font-bold mr-6'>{list.name}</li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  );
}
export default DemoFBStarter_Header;