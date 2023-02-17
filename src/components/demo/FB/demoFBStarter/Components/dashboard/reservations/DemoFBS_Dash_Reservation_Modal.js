import { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import Spinner from "../../../../../../spinner";
import { MdPrint, MdPhoneForwarded } from 'react-icons/md';
import { dateSetter } from "../components/functions_elements";
import { reservationButtonDistributor, reservationTitleDistributor } from "../components/functions_elements";

const DemoFBS_Dash_Reservation_Modal = ({seletedReservation, isModalOpen, setIsModalOpen}) => {
  console.log(seletedReservation, 'from modal')
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsModalOpen}>
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
                !!seletedReservation ?
                <>
                  <div className="flex flex-col">
                    <div className="mt-3 sm:mt-5">
                      {/* First row */}
                      <div className="flex w-full justify-between mb-6 pl-4 border-b pb-4">
                        {reservationTitleDistributor(seletedReservation.reservationStatus)}
                      </div>
                      {/* Second row */}
                      <div className="flex w-full text-left ml-4 mb-4">
                        <div >
                          <h3 className="truncate text-xl font-medium text-gray-900 mb-1">{seletedReservation.reservedName}</h3>
                          <p className="text-sm text-gray-500">{seletedReservation.reservedEmail}</p>
                          <p className="text-sm text-gray-500">{seletedReservation.reservedContact}</p>
                          <div className="my-2">
                            <p className="text-xs text-gray-500">party</p>
                            <p className="text-sm text-gray-900">{seletedReservation.party} people</p>
                          </div>
                          <div className="my-2">
                            <p className="text-xs text-gray-500">date</p>
                            <p className="text-sm text-gray-900">{dateSetter(seletedReservation.reservedDate)}</p>
                          </div>
                          <div className="my-2">
                            <p className="text-xs text-gray-500">comment</p>
                            <p className="text-sm text-gray-900">{seletedReservation.comment}</p>
                          </div>
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
                        onClick={() => setIsModalOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                    <div className="w-1/2 flex flex-row text-sm">
                      {reservationButtonDistributor(seletedReservation.reservationStatus, 'Deny')}
                      {reservationButtonDistributor(seletedReservation.reservationStatus, 'Confirm')}
                      {reservationButtonDistributor(seletedReservation.reservationStatus, 'Complete')}
                      {reservationButtonDistributor(seletedReservation.reservationStatus, 'Cancel Deny')}
                      {reservationButtonDistributor(seletedReservation.reservationStatus, 'Cancel Complete')}
                    </div>
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
export default DemoFBS_Dash_Reservation_Modal;