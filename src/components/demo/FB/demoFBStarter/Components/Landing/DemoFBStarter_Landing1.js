import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Demo_Button_Yellow } from '../Button/button';

const DemoFBStarter_Landing1 = (props) => {

  // States for images
  const [ currentImg, setCurrentImg ] = useState(0);

  // button handlers

  const imgButtonNext = (e) => {
    if ( currentImg >= 5) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  }

  const imgButtonPrev = (e) => {
    if (currentImg <= 0) {
      setCurrentImg(5);
    } else {
      setCurrentImg(currentImg - 1);
    }
  }

  const bgSelector = (state) => {
    if (currentImg === 0) {
      return 'bg-bbq1'
    }
    if (currentImg === 1) {
      return 'bg-bbq3'
    }
    if (currentImg === 2) {
      return 'bg-bbq4'
    }
    if (currentImg === 3) {
      return 'bg-bbq5'
    }
    if (currentImg === 4) {
      return 'bg-bbq8'
    }
    if (currentImg === 5) {
      return 'bg-bbq9'
    }
  }
  // move down pics = 5(bbq6), 6(bbq7), 1(bbq2)

  const tailwindSelector = (state) => {
    let baseTailwind = 'h-screen flex flex-row flex-nowrap justify-between items-center bg-center bg-cover bg-blend-multiply bg-gray-400';
    if (state !== null) {
      return `${baseTailwind} ${bgSelector(currentImg)}`
    }
  }

  return (
    <div 
      className={tailwindSelector(currentImg)}
    >
      <div className='w-24 flex flex-row justify-center'>
        <button onClick={imgButtonPrev}><HiOutlineChevronLeft className='text-5xl text-red-800 font-bold hover:text-white' /></button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-7xl text-white font-extrabold'>Let's BBQ</h1>
        <p className='text-xl text-white px-48 py-6'>The old-school BBQ you remember. The new-school flavors you won’t forget. Let our team bring the Federalist Pig experience to your office, home, or event. </p>
        <Demo_Button_Yellow link="#" text="Order Now" />
      </div>
      <div className='w-24 flex flex-row justify-center'>
        <button onClick={imgButtonNext}><HiOutlineChevronRight className='text-5xl text-red-800 font-bold hover:text-white' /></button>
      </div>
    </div>
  );
}
export default DemoFBStarter_Landing1;
