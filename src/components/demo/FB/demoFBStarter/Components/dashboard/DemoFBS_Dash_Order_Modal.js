import { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import Spinner from "../../../../../spinner";
import { MdPrint, MdPhoneForwarded } from 'react-icons/md';

import { OrderTypeDistributor, OrderPlacedTimeDistributor, OrderPaidDistributor, TaxCal, OrderStatusInModal, SetButtonDistributor } from "./components/functions_elements";

const DemoFBS_Dash_Order_Modal = ({ open, setOpen, selectedOrder }) => {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 font-arvo">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
            <Dialog.Panel className="overflow-hidden w-80 md:w-1/2 rounded-lg bg-white px-4 pt-5 pb-4 shadow-xl transition-all sm:my-8 sm:p-6">
              {
                !!selectedOrder ?
                <>
                  <div className="flex flex-col">
                    <div className="mt-3 sm:mt-5">
                      {/* First row */}
                      <div className="flex w-full justify-between mb-6">
                        <div className="flex flex-row items-center">
                          {OrderTypeDistributor(selectedOrder.orderType)}
                          {OrderPaidDistributor(selectedOrder.isPaid)}
                          {OrderPlacedTimeDistributor(selectedOrder.orderedWhen)}
                        </div>
                        <div className="flex flex-end items-center pr-4">
                          <p className="inline border-2 border-gray-400 rounded-md p-1 mr-2 text-gray-400 hover:border-gray-600 hover:text-gray-600"><MdPrint /></p>
                          <p className="italic text-xs text-gray-500"># {selectedOrder.orderId}</p>
                        </div>
                      </div>
                      <div className="flex flex-start pl-4 mb-2">
                        {OrderStatusInModal(selectedOrder.orderState)}
                      </div>
                      {/* Second row */}
                      <div className="flex w-full text-left ml-4 mb-4">
                        <div >
                          <h3 className="truncate text-xl font-medium text-gray-900 mb-1">{selectedOrder.customer.customerName}</h3>
                          <p className="text-sm text-gray-500">{selectedOrder.customer.customerEmail}</p>
                          <p className="text-sm text-gray-500">{selectedOrder.customer.customerContact}</p>
                        </div>
                      </div>
                      {/* Third row */}
                      <div className="flex flex-col w-full text-left ml-4">
                        <div>
                          <h3 className="text-red-700 font-bold">Ordered Items</h3>
                        </div>
                        <div className="w-full pr-8">
                          {selectedOrder.order.orderedItems.map((order) => (
                            <div key={order.id} className='flex flex-row flex-nowrap justify-between border-b-2 border-gray-100 py-2'>
                              <p className="text-sm">{order.name}</p>
                              <p className="text-sm">$ {order.price.toFixed(2)}</p>
                            </div>
                          ))}
                        </div>
                        <div className="w-full pr-8 flex justify-end py-2">
                          <p className="text-sm">total : $ {selectedOrder.orderTotal.toFixed(2)}</p>
                        </div>
                        <div className="w-full pr-8 flex justify-end pb-2">
                          <p className="text-sm">tax : $ {TaxCal(selectedOrder.orderTotal, selectedOrder.orderTax, 'tax')}</p>
                        </div>
                        <div className="w-full pr-8 flex justify-end pb-2">
                          <p className="text-sm text-red-600 font-bold">Sub Total : $ {TaxCal(selectedOrder.orderTotal, selectedOrder.orderTax, 'subTotal')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 sm:mt-6 flex flex-row w-full mb-2">
                    <div className="w-1/2 flex flex-row text-sm">
                      <button className="w-1/2 mx-1 hover:text-red-600 flex justify-center items-center focus:outline-none">Customer<MdPhoneForwarded className="mx-2 text-lg"/></button>
                      <button
                        type="button"
                        className="w-1/2 justify-center rounded-md border-2 border-red-600 bg-white px-4 py-2 text-base font-medium text-gray-900 shadow-sm hover:text-red-600 mx-1"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                    {SetButtonDistributor(selectedOrder.orderState, selectedOrder.isPaid)}
                  </div>

                </>
                :
                <div className="w-80 h-75">
                  <Spinner />
                </div>
              }
            </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export default DemoFBS_Dash_Order_Modal;
