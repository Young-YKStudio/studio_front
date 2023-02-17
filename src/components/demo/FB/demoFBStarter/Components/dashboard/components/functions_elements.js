import moment from 'moment';

// Orders

export const OrderTypeDistributor = (string) => {
  if (string === 'Uber Eats') {
    return <p className="truncate rounded-full bg-green-700 text-white px-2.5 py-1 text-xs font-medium flex items-center mx-2">{string}</p>
  }
  if (string === 'DoorDash') {
    return <p className="truncate rounded-full bg-red-500 text-white px-2.5 py-1 text-xs font-medium flex items-center mx-2">{string}</p>
  }
  if (string === 'GrubHub') {
    return <p className="truncate rounded-full bg-orange-500 text-white px-2.5 py-1 text-xs font-medium flex items-center mx-2">{string}</p>
  }
  if (string === 'Pick Up') {
    return <p className="truncate rounded-full bg-blue-500 text-white px-2.5 py-1 text-xs font-medium flex items-center mx-2">{string}</p>
  }
  if (string === 'Delivery') {
    return <p className="truncate rounded-full bg-purple-500 text-white px-2.5 py-1 text-xs font-medium flex items-center mx-2">{string}</p>
  }
}

export const OrderPlacedTimeDistributor = (string) => {
  return <p className="truncate italic text-gray-500 text-sm">: {string}</p>
}

export const OrderPaidDistributor = (boolean) => {
  if (boolean) {
    return <p className="truncate rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium flex items-center mr-2 text-blue-600">fully paid</p>
  } else {
    return <p className="truncate rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium flex items-center text-red-600">NOT PAID</p>
  }
}

export const OrderStatusInModal = (string) => {
  if(string === 'New') {
    return <p className="text-red-600 text-sm">* New Order *</p>
  }
  if(string === 'Preparing') {
    return <p className="text-blue-600 text-sm">* Preparing... *</p>
  }
  if(string === 'Ready') {
    return <p className="text-green-600 text-sm">* This order is Ready *</p>
  }
  if(string === 'Completed') {
    return <p className="text-red-600 text-sm">* Completed Order *</p>
  }
}

export const TaxCal = (total, taxRate, type) => {
  let subTotal = 0;
  let tax = 0;

  tax = total * taxRate
  subTotal = total + tax;

  if (type === 'tax') {
    return tax.toFixed(2)
  }
  if(type === 'subTotal') {
    return subTotal.toFixed(2);
  }
}

export const SetButtonDistributor = (page, state) => {
  if (page === 'New') {
    return <button className="w-1/2 px-4 py-2 bg-red-600 text-white rounded-md border-transparent border-2 mx-1 hover:bg-red-900 shadow-sm">Set as Preparing</button>
  }
  if (page === 'Preparing') {
    return <button className="w-1/2 px-4 py-2 bg-blue-600 text-white rounded-md border-transparent border-2 mx-1 hover:bg-blue-900 shadow-sm">Set as Ready</button>
  }
  if (page === 'Ready' && state) {
    return <button className="w-1/2 px-4 py-2 bg-green-600 text-white rounded-md border-transparent border-2 mx-1 hover:bg-green-900 shadow-sm">Set as Completed</button>
  }
  if (page === 'Ready' && !state) {
    return <button className="w-1/2 px-4 py-2 bg-green-600 text-white rounded-md border-transparent border-2 mx-1 hover:bg-green-900 shadow-sm">Collect Payment</button>
  }
  if (page === 'Completed') {
    return <button className="w-1/2 px-4 py-2 bg-red-600 text-white rounded-md border-transparent border-2 mx-1 hover:bg-red-900 shadow-sm">Undo Complete</button>
  }
}

export const dateSetter = (type) => {
  let convertedDate = moment(type).format('LL LTS')
  return convertedDate
}

// Reservations

export const reservationButtonDistributor = (status, type) => {
  if (status === 'New' && type === 'Confirm') {
    return <button className='w-1/2 px-4 py-2 bg-green-600 text-white rounded-md border-transparent border-2 mx-1 hover:bg-green-900 shadow-sm'>Confirm</button>
  }
  if (status === 'New' && type === 'Deny') {
    return <button className='w-1/2 px-4 py-2 bg-red-600 text-white rounded-md border-transparent border-2 mx-1 hover:bg-red-900 shadow-sm'>Deny</button>
  }
  if (status === 'Confirmed' && type === 'Complete') {
    return <button className='w-full px-4 py-2 bg-green-600 text-white rounded-md border-transparent border-2 mx-1 hover:bg-green-900 shadow-sm'>Complete</button>
  }
  if (status === 'Denied' && type === 'Cancel Deny') {
    return <button className='w-full px-4 py-2 bg-green-600 text-white rounded-md border-transparent border-2 mx-1 hover:bg-green-900 shadow-sm'>Cancel Deny</button>
  }
  if (status === 'Completed' && type === 'Cancel Complete') {
    return <button className='w-full px-4 py-2 bg-red-600 text-white rounded-md border-transparent border-2 mx-1 hover:bg-red-900 shadow-sm'>Cancel Complete</button>
  }
}

export const reservationTitleDistributor = (status) => {
  if (status === 'New') {
    return <p className='text-xl font-bold text-blue-800'>Reservation Info - New</p>
  }
  if (status === 'Confirmed') {
    return <p className='text-xl font-bold text-green-800'>Reservation Info - Confirmed</p>
  }
  if (status === 'Denied') {
    return <p className='text-xl font-bold text-red-800'>Reservation Info - Denied</p>
  }
  if (status === 'Completed') {
    return <p className='text-xl font-bold text-gray-800'>Reservation Info - Denied</p>
  }
}