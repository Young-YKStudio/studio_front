import { useState } from 'react';
import { marketingAPI } from '../components/data';
import MultiSelect from './MultiSelect';
import EmailForm from './EmailForm';

const DemoFBS_Dash_Marketing = (props) => {

  const [ selectedCustomer, setSelectedCustomer ] = useState([]);
  console.log(marketingAPI);
  return (
    <section className='bg-red-800 w-full p-4'>
      <p className="text-3xl text-white border-b-2 border-double pb-2 mt-4 mb-6 font-bold truncate lg:text-center">Email Marketing</p>
      {marketingAPI &&
        <div className='grid grid-cols-1 px-4 mr-4'>
          {/* 1st row */}
          <p className='text-center text-white mb-2'>Choose Customer</p>
          <MultiSelect selectedCustomer={selectedCustomer} marketingAPI={marketingAPI} setSelectedCustomer={setSelectedCustomer}/>
          <EmailForm />
        </div>
      }
    </section>
  );
}
export default DemoFBS_Dash_Marketing;