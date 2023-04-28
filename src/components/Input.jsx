import React from 'react';

const Input = ({ label }) => {
  return (
    <div>
      <h5>{label}</h5>
      <input placeholder="Enter deposit amount" className="text-box"></input>
    </div>
  );
};

export default Input;
