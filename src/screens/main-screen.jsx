import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCard from './AccountCard';
import './App.css';


const MainScreen = () => {
  const [accounts, setAccounts] = useState({
    debit: { name: 'Дебетовый счет', balance: 0 },
    credit: { name: 'Кредитный счет', balance: 0 },
    deposit: { name: 'Вклад', balance: 0 }
  });
  const navigate = useNavigate();

  // Загрузка данных из БД
  useEffect(() => {
    const fetchAccounts = async () => {
      // Здесь должен быть реальный запрос к API
      const mockData = {
        debit: 50000,
        credit: -10000,
        deposit: 150000
      };
      
      setAccounts({
        debit: { ...accounts.debit, balance: mockData.debit },
        credit: { ...accounts.credit, balance: mockData.credit },
        deposit: { ...accounts.deposit, balance: mockData.deposit }
      });
    };

    fetchAccounts();
  }, []);

  const handleAction = (action, accountType) => {
    navigate(`/${action}/${accountType}`);
  };

  return (
    <div className="container">
      <h1>Банковское приложение</h1>
      <div className="accounts-grid">
        {Object.entries(accounts).map(([key, account]) => (
          <AccountCard 
            key={key}
            account={account}
            onDeposit={() => handleAction('deposit', key)}
            onWithdraw={() => handleAction('withdraw', key)}
            onTransfer={() => handleAction('transfer', key)}
          />
        ))}
      </div>
    </div>
  );
};

//export default MainScreen;


function Main_screen() {

  const navigate = useNavigate();


  // Состояния для счетов (изначально пустые, потом загружаются из БД)
  const [accounts, setAccounts] = useState({
    debit: { name: 'Дебетовый счет', balance: 0 },
    credit: { name: 'Кредитный счет', balance: 0 },
    deposit: { name: 'Вклад', balance: 0 }
  });

  // Состояния для полей ввода
  const [phoneNumbers, setPhoneNumbers] = useState({
    debit: '',
    credit: '',
    deposit: ''
  });

  // Состояния для сумм операций
  const [amounts, setAmounts] = useState({
    debit: '',
    credit: '',
    deposit: ''
  });

  // Загрузка данных из БД (имитация)
  useEffect(() => {
    // Здесь должен быть реальный запрос к API/БД
    const fetchAccounts = async () => {
      // Имитация ответа от сервера
      const response = {
        debit: 25000,
        credit: -5000,
        deposit: 100000
      };
      
      setAccounts({
        debit: { ...accounts.debit, balance: response.debit },
        credit: { ...accounts.credit, balance: response.credit },
        deposit: { ...accounts.deposit, balance: response.deposit }
      });
    };

    fetchAccounts();
  }, []);

  // Обработчики изменения полей ввода
  const handlePhoneChange = (accountType, value) => {
    setPhoneNumbers({
      ...phoneNumbers,
      [accountType]: value
    });
  };

  //const handleAmountChange = (accountType, value) => {
  //  setAmounts({
  //    ...amounts,
  //    [accountType]: value
  //  });
  //};
  // Обработчики кнопок
  //const handleTopUp = (accountType) => {
  //  const amount = parseFloat(amounts[accountType]);
  //  if (amount && amount > 0) {
  //    // Здесь должен быть запрос к API для пополнения
  //    setAccounts({
  //      ...accounts,
  //      [accountType]: {
  //        ...accounts[accountType],
  //        balance: accounts[accountType].balance + amount
  //      }
  //    });
  //    alert(`Пополнение ${accounts[accountType].name} на ${amount}₽`);
  //  } else {
  //    alert('Введите корректную сумму');
  //  }
  //};

  //const handleSend = (accountType) => {
  //  const phone = phoneNumbers[accountType];
  //  const amount = parseFloat(amounts[accountType]);
    
  //  if (phone && amount && amount > 0) {
  //    // Здесь должен быть запрос к API для перевода
  //    if (accounts[accountType].balance >= amount) {
  //      setAccounts({
  //        ...accounts,
  //        [accountType]: {
  //          ...accounts[accountType],
  //          balance: accounts[accountType].balance - amount
  //        }
  //      });
  //      alert(`Перевод ${amount}₽ на номер ${phone} с ${accounts[accountType].name}`);
  //    } else {
  //      alert('Недостаточно средств');
  //    }
  //  } else {
  //    alert('Заполните номер телефона и сумму');
  //  }
  //};

  // Форматирование суммы для отображения
  const formatBalance = (balance) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(balance);
  };


  const handleAction = (action, accountType) => {
    navigate(`/${action}/${accountType}`);
  };


  return (
    <div className="bank-app">
      <h1 className="greeting" >TTT Bank</h1>
      <div className="accounts-container">
        <div className="account-cards">
        {Object.entries(accounts).map(([key, account]) => (
          <div onClick={() => key == 'credit' ? navigate('../creditM') : navigate('../depositM') } key={'debit'} className={`account-card ${key == 'debit' ? 'cant' : ''} `}>
            <div className="account-info">
              <p className={`balance ${account.balance < 0 ? 'negative' : ''}`}>
                {formatBalance(account.balance)}
              </p><br/>
              <h2 className="account-type">{account.name}</h2>
            </div>
            </div>

))}
</div>
<div className="operations-panel">
        {/* Поле ввода суммы */}
        <div className="amount-input">
          <input
            type="tel"
            placeholder="Номер телефона"
            className="input-field"
            //value={amount}
            //onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="amount-input">
          <input
            type="number"
            placeholder="Сумма"
            className="input-field"
            //value={amount}
            //onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Кнопки операций */}
        <div className="buttons">
          <button className="btn-gen" onClick={() => handleAction('deposit', 'debit')}>
            Пополнить
          </button>
          <button className="btn-gen" onClick={() => handleAction('withdraw', 'debit')}>
            Вывести
          </button>
          <button className="btn-gen" onClick={() => handleAction('transfer', 'debit')}>
            Отправить
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main_screen