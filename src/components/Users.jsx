import User from './User';

const Users = ({ users, handleClick, isSelected }) => {
  return (
    <>
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
    </>
  );
};

export default Users;
