import React, {useState} from "react";
import "./MainPageStyle.css"

const MainPage = () => {
    const [balance, setBalance] = useState({
        debit: 128.37,
        credit: 113.16,
        investment: 209,
        savings: 0,
        limit: 91000,
        creditTotal: 100000
    });

    const totalbalance = balance.debit + balance.credit + balance.investment + balance.savings

    const [selectedAccount, setSelectedAccount] = useState(null);

    const [amount, setAmount] = useState('');

    const handleDeposit = () => {
        if (!amount || isNaN(parseFloat(amount))) return;

        const newBalance = {...balance};
        newBalance[selectedAccount] += parseFloat(amount);
        setBalance(newBalance);
        setAmount('');
    };

    const handleWithdraw = () => {
        if (!amount || isNaN(parseFloat(amount))) return;
        if (balance[selectedAccount] < parseFloat(amount)) return;

        const newBalance = {...balance};
        newBalance[selectedAccount] -= parseFloat(amount);
        setBalance(newBalance);
        setAmount('');
    };

    const handleTransfer = () => {
        if (!amount || isNaN(parseFloat(amount))) return;
        if (balance[selectedAccount] < parseFloat(amount)) return;

        alert('Функция перевода будет доступна в следующей версии');
        setAmount('');
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const formatCurrency = (value) => {
        return value.toFixed(2).replace('.', ',') + ' ₽';
    };

    return (
        <div>
            <header>
                <h1>Добрый день, ваш общий баланс сегодня: {formatCurrency(totalbalance)}</h1>
            </header>

            <div className="container">
                <div className="content">
                    <div className="left-panel">
                        <div
                            className={`account-card ${selectedAccount === 'debit' ? 'selected' : ''}`}
                            onClick={() => setSelectedAccount('debit')}
                        >
                            <div className="card-header">
                                <div className="card-icon icon-primary">₽</div>
                                <div className="card-balance">
                                    <div className="balance-amount">{formatCurrency(balance.debit)}</div>
                                    <div className="balance-label">Black</div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`account-card ${selectedAccount === 'credit' ? 'selected' : ''}`}
                            onClick={() => setSelectedAccount('credit')}
                        >
                            <div className="card-header">
                                <div className="card-icon icon-neutral">⚡</div>
                                <div className="card-balance">
                                    <div className="balance-amount">{formatCurrency(balance.credit)} из {formatCurrency(balance.creditTotal)}</div>
                                    <div className="balance-label">Прикол</div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`account-card ${selectedAccount === 'investment' ? 'selected' : ''}`}
                            onClick={() => setSelectedAccount('investment')}
                        >
                            <div className="card-header">
                                <div className="card-icon icon-primary">💼</div>
                                <div className="card-balance">
                                    <div className="balance-amount">{formatCurrency(balance.investment)}</div>
                                    <div className="balance-label">Инвестиции</div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`account-card ${selectedAccount === 'savings' ? 'selected' : ''}`}
                            onClick={() => setSelectedAccount('savings')}
                        >
                            <div className="card-header">
                                <div className="card-icon icon-primary">📈</div>
                                <div className="card-balance">
                                    <div className="balance-amount">{formatCurrency(balance.savings)}</div>
                                    <div className="balance-label">Инвесткопилка</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-panel">
                        {selectedAccount && (
                            <div className="account-details">
                                <h2 className="details-title">
                                    {selectedAccount === 'debit' && 'Дебетовая карта Black'}
                                    {selectedAccount === 'credit' && 'Кредитная карта Прикол'}
                                    {selectedAccount === 'investment' && 'Инвестиционный счет'}
                                    {selectedAccount === 'savings' && 'Инвестиционная копилка'}
                                </h2>

                                <div className="details-balance">
                                    <div className="balance-label">Текущий баланс:</div>
                                    <div className="balance-value">{formatCurrency(balance[selectedAccount])}</div>
                                </div>

                                <div className="amount-input-container">
                                    <label className="amount-input-label">Сумма операции:</label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={handleAmountChange}
                                        className="amount-input"
                                        placeholder="Введите сумму"
                                    />
                                </div>

                                <div className="action-buttons">
                                    <button
                                        onClick={handleWithdraw}
                                        className="btn btn-withdraw"
                                    >
                                        Снять
                                    </button>
                                    <button
                                        onClick={handleTransfer}
                                        className="btn btn-transfer"
                                    >
                                        Перевести
                                    </button>
                                    <button
                                        onClick={handleDeposit}
                                        className="btn btn-deposit"
                                    >
                                        Пополнить
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage
