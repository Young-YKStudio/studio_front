import DashboardNav from "./DashboardNav";
import DashboardLanding from "./sections/DashboardLanding";
import CreditCardPortal from "./sections/CreditCardPortal";
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";

const Dashboard = (props) => {

  // states
  const [ currentWindow, setCurrentWindow ] = useState('Dashboard');

  // components
  const windowSelector = (window) => {
    if (window === 'Dashboard') {
      return <DashboardLanding />
    } else if (window === 'Card Portal') {
      return <CreditCardPortal />
    }
  }

  // handlers
  const changeCurrentWindowChanger = (text) => {
    if (text === 'Dashboard') {
      setCurrentWindow('Dashboard');
      console.log('clicked');
      <Navigate to='/dashboard' replace={false} />
    } else if (text === 'Card Portal') {
      setCurrentWindow('Card Portal');
      <Navigate to='/cardportal' replace={false} />
    }
  }

  // useEffect
  useEffect(() => {

  },[currentWindow])

  return (
    <div className="flex flex-row">
      <DashboardNav currentWindow={currentWindow} changeCurrentWindowChanger={changeCurrentWindowChanger}/>
      <div className="rightside_container w-full p-7">
        {windowSelector(currentWindow)}
      </div>
    </div>
  );
}
export default Dashboard;