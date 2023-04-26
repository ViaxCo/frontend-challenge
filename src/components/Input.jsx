import React from 'react';

const Input = ({ label }) => {
  return (
    <div>
      <label>{label}</label>
      <input placeholder="Enter deposit amount" label="Amount"></input>
    </div>
  );
};

export default Input;
