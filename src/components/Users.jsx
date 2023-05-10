import axios from 'axios';
import { useEffect, useState } from 'react';
import User from './User';
import WalletBox from './WalletBox';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isSelected, setSelected] = useState(1);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users', (req, res) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
      })
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-100vh">
        <div className="flex w-40 justify-between items-center">
          <div>
            {users?.map((data) => {
              return (
                <div
                  className="pointer"
                  key={data.id}
                  onClick={() => handleClick(data.id)}
                >
                  <User data={data} isSelected={isSelected} />
                </div>
              );
            })}
          </div>
          {users.length > 0 && (
            <WalletBox isSelected={isSelected} users={users} />
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
