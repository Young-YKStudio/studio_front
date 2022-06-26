import { useState, useEffect } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast, ToastContainer } from 'react-toastify';

const CardInfo = (props) => {

  const stripe = useStripe();
  const elements = useElements();

  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    if (!stripe) {
      toast.warn('Error loading stripe')
      return;
    }

    if(!props.clientSecret) {
      toast.warn('Error getting clientSecret')
      return;
    }

    const getPaymentIntent = async () => {
      try {
        await stripe.retrievePaymentIntent(props.clientSecret).then(({ paymentIntent }) => {
          switch (paymentIntent.status) {
            case 'succeeded':
              toast.success('Payment Charged');
              break;
            case 'processing':
              toast.loading('Payment in being processed');
              break;
            case 'requires_payment_method':
              toast.warn('First loading or payment was not successful, please try again');
              break;
            default:
              toast.error('Error on processing payment');
              break;
          }
        })
      } catch (error) {
        toast.error('error fount getting payment intent')
        console.log(error)
      }
    }
    getPaymentIntent();
  },[stripe])

  const backButtonHandler = (e) => {
    e.preventDefault();
    props.pageSetter('paymentAmount')
  }

  const paymentButtonHandler = async (e) => {
    e.preventDefault();
    console.log('clicked')
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/dashboard',
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      toast.error(`${error.message}`);
    } else {
      toast.error('Unexpected error occurred.')
    }

    setIsLoading(false);
  }

  const buttonSelector = (boolean) => {
    if (boolean == true) {
      return <button
        className='inline-flex items=center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-slate-300'
        disabled
      >Charge Credit Card</button>
    } else {
      return <button
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={paymentButtonHandler}
      >Charge Credit Card</button>
    }
  }

  return (
    <div>
      {console.log(props.stripe)}
      <p className='text-indigo-500 font-bold text-2xl pt-4 pb-4'><span className='text-gray-800 font-normal text-base'>You're trying to charge:</span> $ {props.paymentAmount}</p>
      <div className="flex flex-col">
        <form id='payment-form'>
          <PaymentElement id='payment-element' />
          <div className='flex flex-row'>
            <div className="mt-4">
              {buttonSelector(isLoading)}
            </div>
            <div className="mt-4 ml-4">
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={backButtonHandler}
              >
                Go Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CardInfo;