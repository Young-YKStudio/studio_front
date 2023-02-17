import { dateSetter } from "../components/functions_elements";

const DemoFBS_Dash_Reservation_New = ({newReservations, reservationClickHandler}) => {

  return (
    <section>
      <p className="text-3xl text-white border-b-2 border-double pb-2 mt-4 mb-6 font-bold truncate lg:text-center">New Reservations</p>
      { newReservations &&
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mr-4">
          {newReservations && newReservations.map((reservation) => (
            <div
              key={reservation.reservationId} 
              className="bg-white p-4 rounded-md shadow-lg border-transparent border-4 hover:border-blue-600 flex flex-col gap-1"
              onClick={(e) => reservationClickHandler(e, reservation.reservationId)}
              >
              <p className='text-lg text-blue-800 font-bold'>{reservation.reservedName}</p>
              <p className="text-base">{reservation.party}ppl,&nbsp;&nbsp;<span className="text-xs">{dateSetter(reservation.reservedDate)}</span></p>
            </div>
          )
          )}
        </div>
      }
    </section>
  );
}
export default DemoFBS_Dash_Reservation_New;