import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdCheckCircleOutline, MdOutlineCancel } from 'react-icons/md';

const MultiSelect = ({ selectedCustomer, marketingAPI, setSelectedCustomer }) => {

  // States
  const [ isSectionOpen, setIsSectionOpen ] = useState(false);
  const [ useStateCall, setUseStateCall ] = useState(false);
  const [ countEmail, setCountEmail ] = useState(0);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setCountEmail(marketingAPI.emailCount)
    }
    return () => {
      isMounted = false;
    }
  },[useStateCall])

  // Handler
  const sectionOpener = (e) => {
    setIsSectionOpen(!isSectionOpen)
  }

  const addToSelection = (e, name) => {
    e.preventDefault();
    let clickedName = marketingAPI.customer.find(obj => obj.customerName === name)

    const doubleEntryValidator = () => {
      let doubleEntry = true;
      selectedCustomer.find(customer => {
        if (customer.customerName === name) {
          doubleEntry = false
        }
      })
      if (doubleEntry) {
        setSelectedCustomer((prev) => ([...prev, clickedName]))
      }
    }
    doubleEntryValidator();
  }

  const deleteSelection = (e, name) => {
    let currentState = selectedCustomer;

    let removedarry = currentState.filter(customer => (customer.customerName !== name))
    setSelectedCustomer(removedarry)
    setUseStateCall(!useStateCall)
  }

  return (
    <>
      <section className='flex flex-row flex-nowrap rounded-md bg-white'>
        <div className="w-full h-10 truncate flex flex-row flex-nowrap items-center overflow-auto px-2">
          {selectedCustomer &&
            selectedCustomer.map((customer, i) => {
              return <p 
                key={i} 
                className='flex bg-green-700 rounded-md px-2 py-1 mr-1 items-center text-white text-xs'
                onClick={(e) => deleteSelection(e, customer.customerName)}
                >
                  <MdOutlineCancel className='mr-1'/> {customer.customerName}
                </p>
            })
          }
        </div>
        <div onClick={sectionOpener} className='w-10 h-10 flex justify-center items-center border-l-2 border-gray-300'>{isSectionOpen? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
      </section>
      { isSectionOpen && 
        <div className='relative mt-2 max-h-50 bg-gra-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-20 bg-white rounded-md shadow-md p-4 overflow-auto'>
          {marketingAPI.customer.map((customer, i) => {

            let isfound = false;
            const filtering = () => {
              selectedCustomer.find(customerSource => {
                if(customerSource.customerName === customer.customerName) {
                  isfound = true;
                }
              })
            } 

            filtering();

            return <div 
              key={i} 
              className={!isfound ? 'flex justify-between px-3 items-center h-10 border border-gray-400 m-1 text-gray-400' : 'flex justify-between px-3 items-center h-10 border-2 border-green-800 m-1 rounded-md truncate text-green-800'}
              onClick={(e) => addToSelection(e, customer.customerName)}
              >
                <MdCheckCircleOutline className='w-5 h-5 mr-1'/><p className='truncate'>{customer.customerName}</p>
              </div>
          })}
        </div>}
        <div>
          <p className='text-center text-white mt-2'>{countEmail}/100 emails</p>
        </div>
    </>
  );
}
export default MultiSelect;