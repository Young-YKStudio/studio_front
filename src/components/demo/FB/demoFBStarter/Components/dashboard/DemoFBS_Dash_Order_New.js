import Spinner from "../../../../../spinner";

const DemoFBS_Dash_Order_New = ({receivedOrders, modalHandler}) => {

  const orderTypeDistributor = (string) => {
    if (string === 'Uber Eats') {
      return <p className="truncate rounded-full bg-green-700 text-white px-2.5 py-1 text-xs font-medium flex items-center mx-2">{string}</p>
    }
    if (string === 'DoorDash') {
      return <p className="truncate rounded-full bg-red-500 text-white px-2.5 py-1 text-xs font-medium flex items-center mx-2">{string}</p>
    }
    if (string === 'GrubHub') {
      return <p className="truncate rounded-full bg-orange-500 text-white px-2.5 py-1 text-xs font-medium flex items-center mx-2">{string}</p>
    }
  }

  const orderPlacedTimeDistributor = (string) => {
    return <p className="truncate italic text-gray-500 text-sm">: {string}</p>
  }

  const orderPaidDistributor = (boolean) => {
    if (boolean) {
      return <p className="truncate rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium flex items-center mr-2 text-blue-600">fully paid</p>
    } else {
      return <p className="truncate rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium flex items-center text-red-600">NOT PAID</p>
    }
  }

  const totalDistributor = (Number) => {
    return <p className="text-red-600 font-bold text-lg truncate">${Number.toFixed(2)}</p>
  }

  return (
    <>
      {
        receivedOrders.length > 0 ?
        <>
          <p className="text-3xl text-white border-b-2 border-double pb-2 my-4 font-bold truncate">New Orders :&nbsp;&nbsp;<span>{receivedOrders.length} </span></p>
          <ul role="list" className="flex lg:flex-row flex-col">
          {
            !!receivedOrders ?
            receivedOrders.map((order) => (
              <li key={order.orderId} 
                className="rounded-lg bg-white drop-shadow-xl hover:drop-shadow-none hover:outline hover:outline-white hover:outline-offset-2 w-full lg:w-1/2 lg:mr-3 mb-3"
                onClick={(e) => modalHandler(e, order.orderId)}
              >
                <div className="flex flex-col w-full items-center justify-start space-x-6 p-6">

                  <div className="flex w-full justify-between mb-2">
                    <div className="flex flex-row items-center">
                      {orderTypeDistributor(order.orderType)}
                      {orderPaidDistributor(order.isPaid)}
                      {orderPlacedTimeDistributor(order.orderedWhen)}
                    </div>
                    <div className="flex flex-end items-center">
                      <p className="italic text-xs text-gray-500">#{order.orderId}</p>
                    </div>
                  </div>

                  <div className="flex w-full items-end mb-2">
                    <h3 className="truncate text-xl font-medium text-gray-900 mr-2">{order.customer.customerName},</h3>
                    <p className="truncate text-md italic text-gray-500"> {order.order.orderedItems.length} items ordered</p>
                  </div>

                  <div className="flex w-full items-center">
                    {totalDistributor(order.orderTotal)}
                  </div>

                </div>
              </li>
            ))
            :
            <Spinner />
          }
          </ul>
        </>
        :
        <Spinner />
      }
    </>
  );
}
export default DemoFBS_Dash_Order_New;