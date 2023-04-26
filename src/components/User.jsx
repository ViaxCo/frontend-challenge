import React, { useState } from 'react';
import { ReactComponent as MobileMenu } from '../assets/images/kebab.svg';
import Button from './Button';

const User = () => {
  const [showButtons, setShowButtons] = useState(false);
  const handleClick = () => setShowButtons((toggle) => !toggle);
  return (
    <div>
      <h4>Firstname Lastname</h4>
      <h4>400,000</h4>
      <span>
        <MobileMenu onClick={handleClick} />
        {showButtons ? (
          <>
            <Button title="Deposit" /> <Button title="Withdrawal" />
          </>
        ) : null}
      </span>
    </div>
  );
};

export default User;
