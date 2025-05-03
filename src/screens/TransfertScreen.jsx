import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

const TransferScreen = () => {
  const { accountType } = useParams();
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
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

  const handleTransfer = () => {
    const numAmount = parseFloat(amount);
    if (!phone || !numAmount || isNaN(numAmount) || numAmount <= 0) {
      alert('Заполните все поля корректно');
      return;
    }

    if (account.balance < numAmount) {
      alert('Недостаточно средств');
      return;
    }

    // Здесь должен быть запрос к API для перевода
    alert(`Перевод ${amount}₽ на номер ${phone} выполнен`);
    navigate(-1);
  };

  if (!account) return <div>Загрузка...</div>;
  console.log(account);
  return (
    <div className="container">
      <h2>Перевод с: {account.name}</h2>
      <div className="form-container">
        <input
          type="tel"
          placeholder="Номер телефона получателя"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="number"
          placeholder="Сумма перевода"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleTransfer}>Отправить</button>
        <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      </div>
    </div>
  );
};

export default TransferScreen;