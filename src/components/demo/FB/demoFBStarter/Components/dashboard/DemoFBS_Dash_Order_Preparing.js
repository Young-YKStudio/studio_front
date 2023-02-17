import Spinner from "../../../../../spinner";

import { OrderTypeDistributor, OrderPlacedTimeDistributor, OrderPaidDistributor, TaxCal } from "./components/functions_elements";

const DemoFBS_Dash_Order_Preparing = ({receivedOrders, modalHandler}) => {
  return (
    <>
      {
        receivedOrders.length > 0 ?
        <>
          <p className="text-3xl text-white border-b-2 border-double pb-2 my-6 font-bold truncate lg:text-center">Preparing Orders :&nbsp;&nbsp;<span>{receivedOrders.length} </span></p>
          <ul role="list" className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 px-4">
          {
            !!receivedOrders ?
            receivedOrders.map((order) => (
              <li key={order.orderId} 
                className="rounded-lg bg-white drop-shadow-xl hover:drop-shadow-none hover:outline hover:outline-white hover:outline-offset-2 w-full lg:mr-3"
                onClick={(e) => modalHandler(e, order.orderId)}
              >
                <div className="flex flex-col w-full items-center justify-start space-x-6 p-6">

                  <div className="flex w-full justify-between mb-2">
                    <div className="flex flex-row items-center">
                      {OrderTypeDistributor(order.orderType)}
                      {OrderPaidDistributor(order.isPaid)}
                      {OrderPlacedTimeDistributor(order.orderedWhen)}
                    </div>
                    <div className="flex flex-end items-center">
                      <p className="italic text-xs text-gray-500">#{order.orderId}</p>
                    </div>
                  </div>

                  <div className="flex w-full flex-row  justify-between mb-2">
                    <div className="flex flex-row items-center">
                      <h3 className="truncate text-xl font-medium text-gray-900 mr-2">{order.customer.customerName}</h3>
                      <p className="truncate text-sm italic text-gray-500"> {order.order.orderedItems.length} items</p>
                    </div>
                    <div className="flex items-center pr-3">
                      <p className="truncate font-bold text-xl text-red-600">$ {TaxCal(order.orderTotal, order.orderTax, 'subTotal')}</p>
                    </div>
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
export default DemoFBS_Dash_Order_Preparing;