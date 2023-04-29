import { ReactComponent as CloseButton } from '../assets/images/close-button.svg';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

const Modal = ({ action, setShowModal, userData }) => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className="modal">
      <div className="">
        <h4>
          {action}
          <span className='ml-1'>{action === 'Deposit' ? 'to' : 'from'}</span> wallet
        </h4>
        <CloseButton onClick={() => setShowModal(!openModal)} />
      </div>
      <div className="input-box">
        <Input label="Amount" />
      </div>
      <div className="modal-button">
        <button onClick={() => setShowModal(false)}>{action}</button>
      </div>
    </div>
  );
};

export default Modal;
