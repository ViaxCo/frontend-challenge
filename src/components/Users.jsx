import { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';
import AmountContainer from './AmountContainer';
import Modal from './Modal';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then(({ data }) => {
        setUserBalance(data[0]?.walletBalance);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="home-mobile">
        {users?.map((data, id) => {
          return (
            <div key={id}>
              <User data={data} />
            </div>
          );
        })}
      </div>
      <div className="home-desktop">
        <div className="flex flex-col h-full">
          {users?.map((data, id) => {
            return (
              <div
                onClick={() => setUserBalance(data?.walletBalance)}
                className="pointer flex items-center my-3"
                key={id}
              >
                <div>
                  <img
                    src="https://i.ibb.co/wdkxM83/image.png"
                    width="40px"
                    height="40px"
                    alt="image"
                    border="0"
                  />
                </div>
                <div className="user mx-3 flex">
                  <p> {data?.firstName}</p>
                  <p className="ml-1">{data?.lastName}</p>
                </div>
              </div>
            );
          })}
        </div>
        <AmountContainer userBalance={userBalance} />

        {/* <Modal>
          <p>Modal content goes here.</p>
        </Modal> */}
      </div>
    </>
  );
};

export default Users;
