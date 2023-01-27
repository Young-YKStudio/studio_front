import { useState, useEffect, Fragment } from 'react';
import Spinner from '../../../../../spinner';
import { Dialog, Transition } from '@headlessui/react'


// Pages
import DemoFBS_Dash_Order_New from './DemoFBS_Dash_Order_New';
import DemoFBS_Dash_Order_Preparing from './DemoFBS_Dash_Order_Preparing';
import DemoFBS_Dash_Order_Ready from './DemoFBS_Dash_Order_Ready';
import DemoFBS_Dash_Order_Completed from './DemoFBS_Dash_Order_Completed';
import DemoFBS_Dash_Order_Modal from './DemoFBS_Dash_Order_Modal';

const ordersAPI = [
  {
    customer: {
      customerName: 'Jane Cooper1',
      customerContact: '+1-202-555-0170',
      customerEmail: 'janeCooper@example.com',
    },
    order: {
      orderedItems: [
        {
          id: '01',
          name: 'Korea Town',
          price: 13.5
        },
        {
          id: '02',
          name: 'Dino Beef Short Rib combo for 2',
          price: 39
        }
      ],
    },
    orderTotal: 52.5,
    orderTax: 0.0848,
    orderSubTotal: 56.95,
    orderType: 'GrubHub',
    orderState: 'New',
    isPaid: true,
    orderId: '00012',
    orderedWhen: '3m ago'
  },
  {
    customer: {
      customerName: 'Jane Cooper',
      customerContact: '+1-202-555-0170',
      customerEmail: 'janeCooper@example.com',
    },
    order: {
      orderedItems: [
        {
          id: '01',
          name: 'Korea Town',
          price: 13.5
        },
        {
          id: '02',
          name: 'Dino Beef Short Rib combo for 2',
          price: 39
        }
      ],
    },
    orderTotal: 52.5,
    orderTax: 0.0848,
    orderSubTotal: 56.95,
    orderType: 'Uber Eats',
    orderState: 'New',
    isPaid: true,
    orderId: '00011',
    orderedWhen: '3m ago'
  },
  {
    customer: {
      customerName: 'Chris Cooper',
      customerContact: '+1-202-555-0171',
      customerEmail: 'chrisCooper@example.com',
    },
    order: {
      orderedItems: [
        {
          id: '01',
          name: 'Korea Town',
          price: 13.5
        },
        {
          id: '02',
          name: 'Dino Beef Short Rib combo for 2',
          price: 39
        },
        {
          id: '03',
          name: 'Dino Beef Short Rib combo for 3',
          price: 39
        },
      ],
    },
    orderTotal: 52.5,
    orderTax: 0.0848,
    orderSubTotal: 56.95,
    orderType: 'DoorDash',
    orderState: 'New',
    isPaid: true,
    orderId: '00010',
    orderedWhen: '5m ago'
  },
]


const DemoFBS_Dash_Order = (props) => {

  const [ receivedOrders, setReceivedOrders ] = useState([]);
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ selectedOrder, setSelectedOrder ] = useState();

  useEffect(() => {
    let isLoading = true;

    const saveToState = async (state) => {
      if(isLoading) {
        await setReceivedOrders(state)
      }
    }

    return () => {
      saveToState(ordersAPI)
      isLoading = false;
    }

  },[ordersAPI])

  const modalHandler = async (e, id) => {
    e.preventDefault();

    let foundOrder = await receivedOrders.find(order => order.orderId === id)
    if (foundOrder) {
      await setSelectedOrder(foundOrder)
      setIsModalOpen(true);
    }
  }

  return (
    <section className='bg-red-800 w-full p-4'>
      {receivedOrders.length > 0 ?
        <>
          <section>
            <DemoFBS_Dash_Order_New receivedOrders={receivedOrders} modalHandler={modalHandler} />
          </section>
          <section>
            <DemoFBS_Dash_Order_Preparing />
          </section>
          <section>
            <DemoFBS_Dash_Order_Ready />
          </section>
          <section>
            <DemoFBS_Dash_Order_Completed />
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