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