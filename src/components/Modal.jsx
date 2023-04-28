import React from 'react';
import { ReactComponent as CloseButton } from '../assets/images/close-button.svg';
import Input from './Input';
import Button from './Button';

const Modal = () => {
  return (
    <div className="modal">
      <div className="">
        <h4>Deposit/Withdraw to/from wallet</h4>
        <CloseButton />
      </div>
      <div className="input-box">
        <Input label="Amount" />
      </div>
      <div className="modal-button">
        <Button title="Deposit/Withdraw" />
      </div>
    </div>
  );
};

export default Modal;
