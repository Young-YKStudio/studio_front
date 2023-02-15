import { useState } from 'react';

import DemoFBStarter_Dashboard_Header from "../Components/DemoFBStarter_Dashboard_Header";
import DemoFBS_Dash_Order_Landing from '../Components/dashboard/DemoFBS_Dash_Order_Landing';
import DemoFBS_Dash_Reservation from '../Components/dashboard/reservations/DemoFBS_Dash_Reservation';
import DemoFBS_Dash_Marketing from '../Components/dashboard/DemoFBS_Dash_Marketing';
import DemoFBS_Dash_Menu from '../Components/dashboard/DemoFBS_Dash_Menu';
import DemoFBS_Dash_Statistic from '../Components/dashboard/DemoFBS_Dash_Statistic';
import DemoFBS_Dash_Setting from '../Components/dashboard/DemoFBS_Dash_Setting';

const DemoFBDashboard = (props) => {

  const [ currentPage, setCurrentPage ] = useState('Orders');

  const sectionSelector = (state) => {
    if (state === 'Orders') {
      return <DemoFBS_Dash_Order_Landing />
    }
    if (state === 'Reservations') {
      return <DemoFBS_Dash_Reservation />
    }
    if (state === 'Marketing') {
      return <DemoFBS_Dash_Marketing />
    }
    if (state === 'Menu Management') {
      return <DemoFBS_Dash_Menu />
    }
    if (state === 'Statistics') {
      return <DemoFBS_Dash_Statistic />
    }
    if (state === 'Settings') {
      return <DemoFBS_Dash_Setting />
    }
  }

  return (
    <>
      <div className='flex flex-row flex-nowrap font-arvo bg-red-800'>
        <DemoFBStarter_Dashboard_Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {sectionSelector(currentPage)}
      </div>
    </>
  );
}
export default DemoFBDashboard;