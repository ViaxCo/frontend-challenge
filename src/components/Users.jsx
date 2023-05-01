import { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';
import AmountContainer from './AmountContainer';
import Modal from './Modal';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [action, setAction] = useState('');

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

  return (
    <>
      {users?.map((data, id) => {
        return (
          <div key={id}>
            <User data={data} />
          </div>
        );
      })}
    </>
  );
};

export default Users;
