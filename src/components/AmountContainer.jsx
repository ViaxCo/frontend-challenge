import { useState } from 'react';

import Button from './Button';

const AmountContainer = ({ userBalance, setShowModal, handleChildClick }) => {
  const [action, setAction] = useState('');

  function handleClick(title) {
    handleChildClick(title);
  }
  return (
    <div className="amount-container p-3">
      <h1 className="text-base font-normal">Wallet Balance</h1>
      <p className="text-3xl text-deyork my-3">{userBalance}</p>
      <div className="my-6">
        <button
          onClick={(e) => {
            setShowModal(true);
            handleClick(e.target.textContent);
          }}
          className=" pointer font-lato bg-deyork font-normal text-white text-base p-3 border-none rounded-sm"
        >
          Deposit
        </button>
        <button
          onClick={(e) => {
            handleClick(e.target.textContent);
            setShowModal(true);
          }}
          className=" pointer font-lato font-normal bg-white text-deyork text-base ml-3 p-3 border-deyork rounded-sm"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default AmountContainer;
