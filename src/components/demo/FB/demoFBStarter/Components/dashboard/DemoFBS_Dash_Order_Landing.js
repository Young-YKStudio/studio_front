import { useState, useEffect, Fragment } from 'react';
import Spinner from '../../../../../spinner';

import { ordersAPI } from './components/data';

// Pages
import DemoFBS_Dash_Order_New from './DemoFBS_Dash_Order_New';
import DemoFBS_Dash_Order_Preparing from './DemoFBS_Dash_Order_Preparing';
import DemoFBS_Dash_Order_Ready from './DemoFBS_Dash_Order_Ready';
import DemoFBS_Dash_Order_Completed from './DemoFBS_Dash_Order_Completed';
import DemoFBS_Dash_Order_Modal from './DemoFBS_Dash_Order_Modal';

const DemoFBS_Dash_Order = (props) => {

  const [ receivedOrders, setReceivedOrders ] = useState([]);
  const [ receivedNewOrders, setReceivedNewOrders ] = useState([]);
  const [ receivedPreparingOrders, setReceivedPreparingOrders ] = useState([]);
  const [ receivedReadyOrders, setReceivedReadyOrders ] = useState([]);
  const [ receivedCompletedOrders, setReceivedCompletedOrders ] = useState([]);

  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ selectedOrder, setSelectedOrder ] = useState();

  useEffect(() => {
    let isLoading = true;

    const saveAllOrders = async (state) => {
      if(isLoading) {
        await setReceivedOrders(state)
        await state.map((order) => {
          if (order.orderState === 'New') {
            setReceivedNewOrders(prev => [...prev, order])
          }
          if (order.orderState === 'Preparing') {
            setReceivedPreparingOrders(prev => [...prev, order])
          }
          if (order.orderState === 'Ready') {
            setReceivedReadyOrders(prev => [...prev, order])
          }
          if (order.orderState === 'Completed') {
            setReceivedCompletedOrders(prev => [...prev, order])
          }
        })
      }
    }

    return () => {
      saveAllOrders(ordersAPI)
      isLoading = false;
    }

  },[ordersAPI])

  const modalHandler = async (e, id) => {
    e.preventDefault();

    let foundOrder = await receivedOrders.find(order => order.orderId === id)
    if (foundOrder) {
      await setSelectedOrder(foundOrder)
      setIsModalOpen(true);
    } else {
      console.log('there is no order')
    }
  }

  return (
    <section className='bg-red-800 w-full p-4'>
      {receivedOrders.length > 0 ?
        <>
          <section>
            <DemoFBS_Dash_Order_New receivedOrders={receivedNewOrders} modalHandler={modalHandler} />
          </section>
          <section>
            <DemoFBS_Dash_Order_Preparing receivedOrders={receivedPreparingOrders} modalHandler={modalHandler} />
          </section>
          <section>
            <DemoFBS_Dash_Order_Ready receivedOrders={receivedReadyOrders} modalHandler={modalHandler} />
          </section>
          <section>
            <DemoFBS_Dash_Order_Completed receivedOrders={receivedCompletedOrders} modalHandler={modalHandler} />
          </section>
          <DemoFBS_Dash_Order_Modal open={isModalOpen} setOpen={setIsModalOpen} selectedOrder={selectedOrder} />
        </>
        :
        <Spinner />
      }
    </section>
  );
}
export default DemoFBS_Dash_Order;