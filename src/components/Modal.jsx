import React from 'react';
import { ReactComponent as CloseButton } from '../assets/images/close-button.svg';
import Input from './Input';
import Button from './Button';

const ModalBase = () => {
  return (
    <div>
      <span>Deposit/Withdraw to/from wallet</span>
      <CloseButton />
      <Input label="Amount" />
      <Button title="Deposit/Withdraw" />
    </div>
  );
};

export default ModalBase;
