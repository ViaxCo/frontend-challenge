import Button from './Button';

const AmountContainer = ({ userBalance }) => {
  return (
    <div className="amount-container p-3">
      <h1 className="text-base font-normal">Wallet Balance</h1>
      <p className="text-3xl text-deyork my-3">{userBalance}</p>
      <div className="my-6">
        <button className=" pointer bg-deyork text-white text-base p-3 border-none rounded-sm">
          Deposit
        </button>
        <button className=" pointer bg-white text-deyork text-base ml-3 p-3 border-deyork rounded-sm">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default AmountContainer;
