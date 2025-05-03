import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

const WithdrawScreen = () => {
  const { accountType } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // Загрузка данных счета из БД
    const fetchAccount = async () => {
      // Здесь должен быть реальный запрос к API
      const mockAccounts = {
        debit: { name: 'Дебетовый счет', balance: 50000 },
        credit: { name: 'Кредитный счет', balance: -10000 },
        deposit: { name: 'Вклад', balance: 150000 }
      };
      setAccount(mockAccounts[accountType]);
    };

    fetchAccount();
  }, [accountType]);

  const handleWithdraw = () => {
    const numAmount = parseFloat(amount);
    if (!numAmount || isNaN(numAmount) || numAmount <= 0) {
      alert('Введите корректную сумму');
      return;
    }

    if (account.balance < numAmount) {
      alert('Недостаточно средств');
      return;
    }

    // Здесь должен быть запрос к API для вывода
    alert(`Средства выведены: ${amount}₽`);
    navigate(-1);
  };

  if (!account) return <div>Загрузка...</div>;

  return (
    <div className="container">
      <h2>Вывод средств: {account.name}</h2>
      <p>Доступно: {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(account.balance)}</p>
      <div className="form-container">
        <input
          type="number"
          placeholder="Сумма вывода"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleWithdraw}>Вывести</button>
        <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      </div>
    </div>
  );
};

export default WithdrawScreen;