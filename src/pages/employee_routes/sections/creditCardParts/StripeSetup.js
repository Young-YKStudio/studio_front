import { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CardInfo from './CardInfo';
import { toast } from 'react-toastify';

const StripeSetup = (props) => {

  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUB_KEY}`);

  const [ clientSecret, setClientSecret ] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          items: [{ id: 'directCharge', amount: props.paymentAmount}]
        }
      }

      const request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/creditcard/paymentintent`, config)
      console.log(request);
      if (request.data) {
        setClientSecret(request.data.clientSecret);
      } else {
        toast.warn('Error getting Stripe clientsecret')
      }
    }
    fetchData()
  },[])

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CardInfo paymentAmount={props.paymentAmount} clientSecret={clientSecret}/>
        </Elements>
      )}
    </div>
  );
}
export default StripeSetup;