import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import Pricing_Detail from './Pricing_Detail';

const Pricing_Details = (props) => {

  const [ activeSection, setActiveSection ] = useState(false);

  const titleClickHandler = (e) => {
    setActiveSection(!activeSection)
  }

  const importedSection = (state) => {
    if (state) {
      return <Pricing_Detail />
    } else {
      return <div />
    }
  }

  return (
    <section>
      <div className='flex flex-row justify-center mt-16 text-gray-900 text-3xl font-bold'>
        {activeSection ? 
          <button
            className='flex flex-row pt-8'
            onClick={titleClickHandler}
          >
            <HiChevronUp className='h-10 w-10' />Hide detailed breakdown
          </button>
        :
          <button 
            className='flex flex-row pt-8'
            onClick={titleClickHandler}
          >
              <HiChevronDown className='h-10 w-10'/>Show Details Section
          </button>
        }
      </div>
      {importedSection(activeSection)}
    </section>
  );
}
export default Pricing_Details;