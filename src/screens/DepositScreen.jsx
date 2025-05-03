import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

const DepositScreen = () => {
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

  const handleDeposit = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Введите корректную сумму');
      return;
    }

    // Здесь должен быть запрос к API для пополнения
    alert(`Счет пополнен на ${amount}₽`);
    navigate(-1);
  };

  if (!account) return <div>Загрузка...</div>;

  return (
    <div className="container">
      <h1>Пополнение: {account.name}</h1>
      <div className="form-container">
        <input
          type="number"
          placeholder="Сумма пополнения"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="buttons">
        <button onClick={handleDeposit}>Пополнить</button>
        <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
        </div>
      </div>
    </div>
  );
};

export default DepositScreen;