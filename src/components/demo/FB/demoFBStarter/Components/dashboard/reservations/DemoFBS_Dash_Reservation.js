import { useState, useEffect } from 'react';
import { ordersAPI } from '../components/data';

import DemoFBS_Dash_Reservation_New from './DemoFBS_Dash_Reservation_New';
import DemoFBS_Dash_Reservation_Current from './DemoFBS_Dash_Reservation_Current';
import DemoFBS_Dash_Reservation_Completed from './DemoFBS_Dash_Reservation_Completed';
import DemoFBS_Dash_Reservation_Modal from './DemoFBS_Dash_Reservation_Modal';

const DemoFBS_Dash_Reservation = (props) => {

  const [ newReservations, setNewReservations ] = useState([]);
  const [ confirmedReservations, setConfirmedReservations ] = useState([]);
  const [ completedReservations, setCompletedReservations ] = useState([]);
  const [ allReservations, setAllReservations ] = useState([]);
  const [ seletedReservation, setSelectedReservation ] = useState();
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const reservationClickHandler = async (e, id) => {
    e.preventDefault();

    let foundReservation = await allReservations.find(reservation => reservation.reservationId === id)
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
        let reservationConfirmed = [];
        let reservationCompleted = [];
        let reservationAll = [];
        arry.forEach(order => {
          if(!!order.reservations) {
            order.reservations.find(reservation => {
              reservationAll.push(reservation)
              if(reservation.reservationStatus === 'New') {
                reservationNew.push(reservation)
              }
              if(reservation.reservationStatus === 'Confirmed') {
                reservationConfirmed.push(reservation)
              }
              if(reservation.reservationStatus === 'Denied' || reservation.reservationStatus === 'Completed') {
                reservationCompleted.push(reservation)
              }
            })
          }
        });

        setAllReservations(reservationAll)
        setNewReservations(reservationNew)
        setConfirmedReservations(reservationConfirmed)
        setCompletedReservations(reservationCompleted)
      }
    }

    orderDistributor(ordersAPI)
    return () => {
      isMounted = false
    }
  }, [ordersAPI])

  return (
    <section className="bg-red-800 w-full p-4">
      {/* New Reservations */}
      <DemoFBS_Dash_Reservation_New newReservations={newReservations} reservationClickHandler={reservationClickHandler} />
      {/* Current Reservations */}
      <DemoFBS_Dash_Reservation_Current confirmedReservations={confirmedReservations} reservationClickHandler={reservationClickHandler} />
      {/* Completed Reservations */}
      <DemoFBS_Dash_Reservation_Completed completedReservations={completedReservations} reservationClickHandler={reservationClickHandler} />
      {isModalOpen && <DemoFBS_Dash_Reservation_Modal seletedReservation={seletedReservation} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </section>
  );
}
export default DemoFBS_Dash_Reservation;