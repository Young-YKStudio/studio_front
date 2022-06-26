import { useState } from 'react';

const PaymentAmount = (props) => {

  const [ buttonLoading, setButtonLoading ] = useState(false);
  const [ inputtedValue, setInputtedValue ] = useState(0);

  const buttonHandler = (e) => {
    e.preventDefault();
    props.paymentAmountSetter(inputtedValue);
    props.pageSetter('cardInfo');
  }

  const inputHandler = (e) => {
    setInputtedValue(e.target.value)
  }

  return (
    <div className="mt-6 flex flex-col w-1/2">
      <label htmlFor="paymentAmount" className="block text-sm font-medium text-gray-700">
        Payment Amount ($)
      </label>
      <div className="mt-4">
        <input
          type="number"
          name="paymentAmount"
          id="paymentAmount"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter Payment Amount"
          value={inputtedValue}
          onChange={inputHandler}
        />
      </div>
      <div className="mt-4">
        <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={buttonHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default PaymentAmount;