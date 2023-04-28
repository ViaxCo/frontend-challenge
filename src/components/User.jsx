import React, { useState } from 'react';
import { ReactComponent as MobileMenu } from '../assets/images/kebab.svg';
import Button from './Button';

const User = () => {
  const [showButtons, setShowButtons] = useState(false);
  const handleClick = () => setShowButtons((toggle) => !toggle);
  return (
    <div className="box">
      <div className="box-section">
        {/* <div className="circle"></div>
        <h4>Fname Lname</h4> */}
      </div>
      <div className="box-section">
        {/* <h4>400,000</h4>
        <span>
          <MobileMenu onClick={handleClick} />
          {showButtons ? (
            <>
              <Button title="Deposit" /> <Button title="Withdrawal" />
            </>
          ) : null}
        </span> */}
      </div>
    </div>
  );
};

export default User;
