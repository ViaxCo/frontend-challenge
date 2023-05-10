import React, { useState } from 'react';
import { ReactComponent as MobileMenu } from '../assets/images/kebab.svg';
import Modal from './Modal';
import SelectButton from './SelectButton';

const User = ({ data, isSelected }) => {
  const { id, firstName, lastName, walletBalance } = data;
  const [showDropDown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('');

  const handleSelection = (string) => setAction(string);

  return (
    <>
      {/* Desktop screens */}
      <div
        className={`hidden md:flex items-center p-3 ${
          isSelected === id ? 'text-active' : 'text-gray'
        } font-normal`}
      >
        <img
          src="https://i.ibb.co/wdkxM83/image.png"
          alt="image"
          width="40px"
          className="mr-3"
        />
        <p>
          {firstName} {lastName}
        </p>
      </div>
      {/* Mobile screens */}
      <div
        className="md:hidden relative box justify-between h-full items-center"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <div className="flex items-center h-full">
          <div className="">
            <img
              src="https://i.ibb.co/wdkxM83/image.png"
              width="40px"
              alt="image"
              border="0"
            />
          </div>
          <div className="user mx-3 flex">
            <p> {firstName}</p>
            <p className="ml-1">{lastName}</p>
          </div>
        </div>
        <div className="flex items-center">
          <h4 className="walletBalance mx-3">{walletBalance}</h4>
          <span>
            <MobileMenu />
            {showDropDown ? (
              <div className="absolute dropdown">
                <SelectButton
                  setShowModal={setShowModal}
                  title="Deposit"
                  userBalance={walletBalance}
                  handleSelection={handleSelection}
                />
                <SelectButton
                  setShowModal={setShowModal}
                  title="Withdraw"
                  userBalance={walletBalance}
                  handleSelection={handleSelection}
                />
              </div>
            ) : null}
          </span>
        </div>
      </div>

      {showModal ? (
        <Modal userData={data} action={action} setShowModal={setShowModal} />
      ) : null}
    </>
  );
};

export default User;
