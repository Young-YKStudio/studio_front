import { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CardInfo from './CardInfo';
import { toast } from 'react-toastify';

const StripeSetup = (props) => {

  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUB_KEY}`);

  const [ clientSecret, setClientSecret ] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: {
  //         items: [{ id: 'directCharge', amount: props.paymentAmount}]
  //       }
  //     }

  //     const request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/creditcard/paymentintent`, config)
  //     if (request.data) {
  //       if(clientSecret === '') {
  //         setClientSecret(request.data.clientSecret);
  //         console.log(request.data.clientSecret, 'fetched')
  //       } else {
  //         console.log('double entry')
  //       }
  //     } else {
  //       toast.warn('Error getting Stripe clientsecret')
  //     }
  //   }
  //   fetchData()
  // },[])
  const stripeLoad = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        items: [{
          id: 'directCharge', amount: props.paymentAmount
        }]
      }
    }

    const request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/creditcard/paymentintent`, config)
    if (request.data) {
      if(clientSecret === '') {
        setClientSecret(request.data.clientSecret);
        console.log(request.data.clientSecret, 'fetched')
      } else {
        console.log('double entry')
      }
    } else {
      toast.warn('Error getting stripe clientsecret')
    }
  }

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div>
      <h3 className='text-xl mb-2 mt-4 text-indigo-600 font-semibold'>You're about to charge a credit card.</h3>
      <p className=''>Please confirm the final amount.</p>
      <p className='mb-4'>Charge amount: ${props.paymentAmount}</p>
      {!clientSecret ? 
        <button 
          className='inline-flex leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 items-center px-3 py-2'
          onClick={stripeLoad}
        >
          Charge ${props.paymentAmount}
        </button>
      :
      null
      }
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} >
          <CardInfo paymentAmount={props.paymentAmount} clientSecret={clientSecret}/>
        </Elements>
      )}
    </div>
  );
}
export default StripeSetup;