import React, { useState } from 'react';
import { ReactComponent as MobileMenu } from '../assets/images/kebab.svg';
import Button from './Button';

const User = ({ data }) => {
  const {firstName, lastName, walletBalance} = data;
  const [showButtons, setShowButtons] = useState(false);
  const handleClick = () => setShowButtons((toggle) => !toggle);
  return (
    <div className="box justify-between h-full items-center">
      <div className="flex items-center h-full">
        <div className="">
          <img
            src="https://i.ibb.co/wdkxM83/image.png"
            width="50px"
            alt="image"
            border="0"
          />
        </div>
        <h4>
          {firstName}
          {lastName}
        </h4>
      </div>
      <div className="flex">
        <h4>{walletBalance}</h4>
        <span>
          <MobileMenu onClick={handleClick} />
          {showButtons ? (
            <>
              <Button title="Deposit" /> <Button title="Withdrawal" />
            </>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default User;
