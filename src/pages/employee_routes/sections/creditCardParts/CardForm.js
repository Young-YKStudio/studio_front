import { useState } from 'react';
import axios from 'axios';
import states from './states.json';
import { CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { formatZipCode } from './CardUtils';
import styled from '@emotion/styled'
import { toast } from 'react-toastify';

const CardForm = (props) => {

  // states
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [cardName, setCardName] = useState('');
  const [city, setCity] = useState('');
  const [line1, setLine1] = useState('');
  const [state, setState] = useState('');
  const [postal, setPostal] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(0);

  // stripe
  const stripe = useStripe();
  const elements = useElements();

  // handler
  const cardNameHandler = (e) => {
    e.preventDefault();
    setCardName(e.target.value);
  }

  const paymentAmountHandler = (e) => {
    e.preventDefault();
    setPaymentAmount(e.target.value);
  }

  const cityHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }
  const addressHandler = (e) => {
    e.preventDefault();
    setLine1(e.target.value);
  }
  const stateHandler = (e) => {
    e.preventDefault();
    setState(e.target.value);
  }
  const postalHandler = (e) => {
    e.preventDefault();
    setPostal(formatZipCode(e.target.value));
  }

  const resetStates = () => {
    setCardName('');
    setCity('');
    setLine1('');
    setState('select state');
    setPostal('');
    setPaymentAmount(0);
  }

  const CardElementContainer = styled.div`
    height: 10px;
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    & .StripeElement {
      width: 100%;
      padding: 12px;
      border: 1px solid lightgray;
      border-radius: 6px;
    }
  `

  const cardElemtOpts = {
    iconStyle: 'solid',
    hidePostalCode: true,
  }

  const paymentButtonHandler = async (e) => {
    e.preventDefault();
    setPaymentLoading(true);

    // if (cardName === '') {
    //   toast.warn('Please enter card holder name')
    //   setPaymentLoading(false);
    //   return;
    // } else if (city === '') {
    //   toast.warn('Please enter city');
    //   setPaymentLoading(false);
    //   return;
    // } else if (line1 === '') {
    //   toast.warn('Please enter billing address');
    //   setPaymentLoading(false);
    //   return;
    // } else if (state === 'select state' || state === '') {
    //   toast.warn('Please enter state');
    //   setPaymentLoading(false);
    //   return;
    // } else if (postal === '') {
    //   toast.warn('Please enter zip code');
    //   setPaymentLoading(false);
    //   return;
    // } else if (paymentAmount === 0) {
    //   toast.warn('Please update billing amount');
    //   setPaymentLoading(false);
    //   return;
    // }

    let runningCard = elements.getElement(CardElement);

    if (runningCard == null) {
      toast.warn('nothing in runndingCard')
      return;
    }

    let billingDetails = {
      name: cardName,
      address: {
        city: city,
        line1: line1,
        state: state,
        postal_code: postal,
      }
    };

    if (!stripe || !elements) {
      setPaymentLoading(false);
      toast.warn('Failed loading stripe, please contact development team.');
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: runningCard,
      billing_details: billingDetails,
    })

    console.log(result, 'clicked');

    // const paymentMethod = async (result) => {
    //   if(result.error) {
    //     toast.warn(`${result.error}, failed runnding credit card`)
    //     setPaymentLoading(false);
    //   } else {
    //     try {
    //       const paymentMethodReq = await axios.post(`${process.env.REACT_APP_SERVER_URL}/creditcard/charge`, {
    //         payment_method_id: result.paymentMethod.id,
    //         currency: 'usd',
    //         totalAmount: Number(paymentAmount).toFixed(2),
    //         billing: billingDetails,
    //       })

    //       if (paymentMethodReq.statusText === 'OK') {
    //         toast.success('payment successful');
    //         resetStates();
    //         setPaymentLoading(false);
    //       } else {
    //         toast.warning('Please check card number and information again')
    //         setPaymentLoading(false);
    //       }
    //     } catch (error) {
    //       toast.warn(`${error}, failed running credit card`);
    //       setPaymentLoading(false);
    //     }
    //   }
    // }
    // paymentMethod(result);
  }

  return (
    <section
      aria-labelledby="payment-and-shipping-heading"
      className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
    >
      <form>
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
          <div>
            <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
              Charge a credit card
            </h3>

            <div className="mt-6">
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                Billing Amount ($)
              </label>
              <div className="mt-1">
                {/* TODO: make $ sign appear, format */}
                <input
                  type="number"
                  id="billingAmount"
                  name="amount"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={paymentAmount}
                  onChange={paymentAmountHandler}
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Billing Information</h3>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
              <div className="sm:col-span-3">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Card Holder
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    value={cardName}
                    onChange={cardNameHandler}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Billing Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="address"
                    name="line1"
                    autoComplete="street-address"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    value={line1}
                    onChange={addressHandler}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    value={city}
                    onChange={cityHandler}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <select
                  id='state'
                  name='state'
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue='select state'
                  required
                  onChange={stateHandler}
                >
                  <option>select state</option>
                  {states.map((state, i) => (
                    <option
                      key={i}
                      value={state.name}
                    >
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                  Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="postal-code"
                    name="postal"
                    autoComplete="postal-code"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={postal}
                    required
                    onChange={postalHandler}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Payment details</h3>

            <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
              <div className="col-span-3 sm:col-span-4">
                <CardElementContainer>
                  {/* <PaymentElement
                    id='payment-element'
                  /> */}
                </CardElementContainer>
              </div>
            </div>
          </div>


        </div>
      </form>
      <div className="flex justify-center pt-6">
        {/* TODO: update loading button */}
        <button
          className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 w-full"
          disabled={paymentLoading || !stripe}
          onClick={paymentButtonHandler}
        >
          Pay now
        </button>
      </div>
    </section>
  );
}
export default CardForm;