import { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CardForm from './creditCardParts/CardForm';
import CheckOutContainer from './creditCardParts/CheckOutContainer';
import CardInfo from './creditCardParts/CardInfo';

const CreditCardPortal = (props) => {

  // const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUB_KEY}`)
  // const [ clientSecret, setClientSecret ] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const config = {
  //       header: {
  //         "Content-Type": 'application/json'
  //       },
  //       body: JSON.stringify({
  //         items: [{
  //           id: 'DirectCharge'
  //         }]
  //       })
  //     }

  //     const request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/creditcard/paymentintent`, config)
  //     console.log(request)
  //   }
  //   fetchData();
  // },[])

  // const paymentAmountSetter = (number) => {
  //   if (number > 0) {
  //     setPaymentAmount(number);
  //   }
  // }

  // const paymentInputProcessingSetter = (Boolean) => {
  //   setPaymentInputProcessing(Boolean)
  // }

  return (
    <div>
      <h3 className='text-2xl mb-4 text-indigo-600 font-semibold'>Card Portal</h3>
        <CheckOutContainer />
        {/* <CheckOutContainer paymentAmount={paymentAmount} paymentInputProcessing={paymentInputProcessing}
        paymentInputProcessingSetter={paymentInputProcessingSetter} paymentAmountSetter={paymentAmountSetter} /> */}
    </div>
  );
}
export default CreditCardPortal;