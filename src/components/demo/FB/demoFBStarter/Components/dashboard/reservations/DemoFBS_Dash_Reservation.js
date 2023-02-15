import { useState, useEffect } from 'react';
import { ordersAPI } from '../components/data';

import DemoFBS_Dash_Reservation_New from './DemoFBS_Dash_Reservation_New';
import DemoFBS_Dash_Reservation_Current from './DemoFBS_Dash_Reservation_Current';
import DemoFBS_Dash_Reservation_Completed from './DemoFBS_Dash_Reservation_Completed';
import DemoFBS_Dash_Reservation_Modal from './DemoFBS_Dash_Reservation_Modal';

const DemoFBS_Dash_Reservation = (props) => {

  const [ newReservations, setNewReservations ] = useState([]);
  const [ seletedReservation, setSelectedReservation ] = useState();
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  // useEffect(() => {
  //   console.log(seletedReservation, isModalOpen, 'at useEffect')
  // }, [seletedReservation])

  const reservationClickHandler = async (e, id) => {
    e.preventDefault();

    let foundReservation = await newReservations.find(reservation => reservation.reservationId === id)
    if(foundReservation) {
      await setSelectedReservation(foundReservation)
      setIsModalOpen(true)
    } else {
      console.log('there is no reservation')
    }
  }

  const modalCloser = () => {
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    let isMounted = true

    const orderDistributor = (arry) => {
      if(isMounted && arry.length > 0 ) {
        let reservationNew = [];
        let foundReservation = arry.forEach(order => {
          if(!!order.reservations) {
            let newFoundReservation = order.reservations.find(reservation => reservation.reservationStatus === 'New')
            reservationNew.push(newFoundReservation)
          }
        });

        setNewReservations(reservationNew)
      }
    }

    orderDistributor(ordersAPI)
    return () => {
      isMounted = false
    }
  }, [ordersAPI])

  return (
    <section className="bg-red-800 w-full">
      {ordersAPI && <p>reservation section</p>}
      {/* New Reservations */}
      <DemoFBS_Dash_Reservation_New newReservations={newReservations} reservationClickHandler={reservationClickHandler} />
      {/* Current Reservations */}
      <DemoFBS_Dash_Reservation_Current />
      {/* Completed Reservations */}
      <DemoFBS_Dash_Reservation_Completed />
      {isModalOpen && <DemoFBS_Dash_Reservation_Modal seletedReservation={seletedReservation} modalCloser={modalCloser}/>}
    </section>
  );
}
export default DemoFBS_Dash_Reservation;