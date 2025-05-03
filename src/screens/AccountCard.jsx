
const AccountCard = ({ account, onDeposit, onWithdraw, onTransfer }) => {
  const formatBalance = (balance) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB'
    }).format(balance);
  };

  return (
    <div className={`account-card ${account.balance < 0 ? 'negative' : ''}`}>
      <h3>{account.name}</h3>
      <p className="balance">{formatBalance(account.balance)}</p>
      <div className="buttons">
        <button onClick={onDeposit}>Пополнить</button>
        <button onClick={onWithdraw}>Вывести</button>
        <button onClick={onTransfer}>Отправить</button>
      </div>
    </div>
  );
};

export default AccountCard;