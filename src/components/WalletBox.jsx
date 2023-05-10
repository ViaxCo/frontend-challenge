import { useState } from 'react';
import Modal from './Modal';

const WalletBox = ({ isSelected, users }) => {
  const data = users.find((data) => data.id === isSelected);
  const { walletBalance } = data;
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('');
  const [openModal] = useState(false);
  return (
    <>
      <div className="hidden md:block wallet-box">
        <p className="mb-3 font-normal">Wallet Balance</p>
        <p className="mb-3 text-2xl text-deyork font-semibold font-lato">
          ₦{walletBalance}
        </p>
        <div className="flex">
          <button
            className="btn btn-deyork mr-3 pointer"
            onClick={() => {
              setAction('Withdraw');
              setShowModal(!openModal);
            }}
          >
            Withdraw
          </button>
          <button
            className="btn btn-deyork-outline pointer"
            onClick={() => {
              setAction('Deposit');
              setShowModal(!openModal);
            }}
          >
            Deposit
          </button>
        </div>
      </div>
      {showModal ? (
        <Modal userData={data} action={action} setShowModal={setShowModal} />
      ) : null}
    </>
  );
};

export default WalletBox;
