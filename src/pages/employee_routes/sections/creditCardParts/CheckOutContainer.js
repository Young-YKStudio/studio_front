import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid'
import PaymentAmount from './PaymentAmount';
import CheckOutComplete from './CheckOutComplete';
import CardInfo from './CardInfo';
import StripeSetup from './StripeSetup';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

let steps = [
]

const CheckOutContainer = (props) => {
  // states
  const [ currentPage, setCurrentPage ] = useState('paymentAmount');
  const [ paymentAmount, setPaymentAmount ] = useState(0);
  // status: complete, current, upcoming

  // handlers
  const paymentAmountSetter = (number) => {
    if (number > 0) {
      setPaymentAmount(number);
    }
  }

  const pageHandler = (currentPage) => {
    if (currentPage === 'paymentAmount') {
      steps = [
        { id: '01', name: 'Payment Amount', status: 'current' },
        { id: '02', name: 'Input Card Information', status: 'upcoming' }
      ]
      return <PaymentAmount 
        pageSetter={pageSetter} 
        paymentAmountSetter={paymentAmountSetter} 
        paymentAmount={paymentAmount}
      />
    } else if (currentPage === 'cardInfo') {
      steps = [
        { id: '01', name: 'Payment Amount', status: 'complete' },
        { id: '02', name: 'Input Card Information', status: 'current' }
      ]
      return <StripeSetup 
        paymentAmount={paymentAmount}
      />
    } else if (currentPage === 'complete') {
      steps = [
        { id: '01', name: 'Payment Amount', status: 'complete' },
        { id: '02', name: 'Input Card Information', status: 'complete' }
      ]
      return <CheckOutComplete />
    }
  }

  const pageSetter = (setPage) => {
    if (setPage === 'paymentAmount') {
      setCurrentPage('paymentAmount');
    } else if (setPage === 'cardInfo') {
      setCurrentPage('cardInfo');
    } else if (setPage === 'complete') {
      setCurrentPage('complete')
    }
  }

  const pageResetter = () => {
    setCurrentPage('paymentAmount');
  }

  return (
    <div>
      <nav aria-label="Progress">
        <ol role="list" className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex-1 md:flex">
              {step.status === 'complete' ? (
                <p className="group flex items-center w-full">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                      <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                  </span>
                </p>
              ) : step.status === 'current' ? (
                <p className="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                    <span className="text-indigo-600">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-indigo-600">{step.name}</span>
                </p>
              ) : (
                <p className="group flex items-center">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                  </span>
                </p>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
      {pageHandler(currentPage)}
    </div>
  );
}
export default CheckOutContainer;