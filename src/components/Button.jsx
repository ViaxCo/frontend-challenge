import React, { useState } from 'react';
import Modal from './Modal';

const Button = ({ title, setShowModal, handleChildClick }) => {
  const [openModal, setOpenModal] = useState(false);

  function handleClick() {
    handleChildClick(title);
  }

  return (
    <>
      <button
        onClick={() => {
          handleClick();
          // setOpenModal(true);
          setShowModal(!openModal);
        }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
