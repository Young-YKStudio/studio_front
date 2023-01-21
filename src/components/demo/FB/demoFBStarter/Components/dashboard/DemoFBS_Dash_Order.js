import { useState } from 'react';

const DemoFBS_Dash_Order = (props) => {

  const [ isSectionPickUp, setIsSectionPickUp ] = useState('ready');

  const sectionChanger = (e, state) => {
    setIsSectionPickUp(`${state}`);
  }

  return (
    <section className='bg-red-800 w-full'>
      <section>
        <p className='text-white'>Ready</p>
      </section>
      <section>
        <p className='text-white'>Preparing</p>
      </section>
      <section>
        <p className='text-white'>Completed</p>
      </section>

    </section>
  );
}
export default DemoFBS_Dash_Order;