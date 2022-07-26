import { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CardForm from './creditCardParts/CardForm';
import CheckOutContainer from './creditCardParts/CheckOutContainer';
import CardInfo from './creditCardParts/CardInfo';

const CreditCardPortal = (props) => {

  return (
    <div>
      <h3 className='text-2xl mb-4 text-indigo-600 font-semibold'>Card Portal</h3>
        <CheckOutContainer />
    </div>
  );
}
export default CreditCardPortal;