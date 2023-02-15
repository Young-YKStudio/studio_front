const DemoFBS_Dash_Reservation_Modal = ({seletedReservation, modalCloser}) => {
  console.log(seletedReservation, 'from modal')
  return (
    <>
      {seletedReservation && <div>
        <p className='text-white'>Modal is Open, {seletedReservation.reservationId}</p>
        <button onClick={modalCloser} className="px-4 py-2 text-white rounded-md border border-white">Close Modal</button>
      </div>}
    </>
  );
}
export default DemoFBS_Dash_Reservation_Modal;