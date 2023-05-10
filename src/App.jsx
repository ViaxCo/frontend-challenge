import axios from 'axios';
import { useEffect, useState } from 'react';
import '../src/styles/main.css';
import Users from './components/Users';
import WalletBox from './components/WalletBox';

const App = () => {
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
      {/* Dekstop screens */}
      <div className="hidden md:flex items-center justify-center min-h-100vh">
        <div className="flex w-40 justify-between items-center">
          <div>
            <Users
              users={users}
              handleClick={handleClick}
              isSelected={isSelected}
            />
          </div>
          {users.length > 0 && (
            <WalletBox isSelected={isSelected} users={users} />
          )}
        </div>
      </div>
      {/* Mobile screens */}
      <div className="md:hidden">
        <Users
          users={users}
          handleClick={handleClick}
          isSelected={isSelected}
        />
      </div>
    </>
  );
};

export default App;
