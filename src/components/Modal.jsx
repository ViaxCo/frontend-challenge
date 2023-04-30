import { ReactComponent as CloseButton } from '../assets/images/close-button.svg';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

const Modal = ({ action, setShowModal, userData }) => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className="modal">
      <div className="w-95 mx-auto my-6">
        <div className="flex justify-between items-center w-full  ">
          <h4 className="text-2xl font-semibold">
            {action}
            <span className="ml-1">
              {action === 'Deposit' ? 'to' : 'from'}
            </span>{' '}
            wallet
          </h4>
          <CloseButton onClick={() => setShowModal(!openModal)} />
        </div>
        <div className="input-box">
          <Input className="w-full" label="Amount" />
        </div>
        <div className="modal-button">
          <button
            className="bg-deyork text-white text-base p-3 border-none rounded-sm"
            onClick={() => setShowModal(false)}
          >
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
