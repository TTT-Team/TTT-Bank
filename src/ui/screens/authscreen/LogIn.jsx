import "./AuthScreenStyle.css";
import React from "react";
import logo from "/src/assets/logo_ttt.svg";
import { Link } from "react-router-dom";

const normalizeInput = (value, previousValue) => {
    if (!value) return value;
    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
        if (cvLength < 4) return `(${currentValue}`;
        if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
        if (cvLength < 9) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)} ${currentValue.slice(6)}`;
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)} ${currentValue.slice(6, 8)}-${currentValue.slice(8, 10)}`;
    }

    return value;
};

const validateInput = (value) => {
    let error = "";
    const digits = value.replace(/[^\d]/g, "");

    if (!value) error = "Required!";
    else if (digits.length !== 10) error = "Некорректный номер телефона";

    return error;
};

const validatePassword = (value) => {
    let error = "";

    if (!value) error = "Required!";
    else if (value.length < 6) error = "Пароль должен содержать минимум 6 символов";

    return error;
};

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            phone: "",
            password: "",
            phoneError: "",
            passwordError: ""
        };
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePhoneChange({ target: { value } }) {
        this.setState((prevState) => ({
            phone: normalizeInput(value, prevState.phone),
            phoneError: ""
        }));
    }

    handlePasswordChange({ target: { value } }) {
        this.setState({
            password: value,
            passwordError: ""
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const phoneError = validateInput(this.state.phone);
        const passwordError = validatePassword(this.state.password);

        this.setState({ phoneError, passwordError }, () => {
            if (!phoneError && !passwordError) {
                setTimeout(() => {
                    alert(`Телефон: +7 ${this.state.phone}, Пароль: ${this.state.password}`);
                }, 300);
            }
        });
    }

    render() {
        return (
            <div className="authscreen">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Логотип" />
                    </Link>
                </div>
                <div className="login-container">
                    <h1 className="title">Вход в ТТТ-Банк</h1>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <div className="input-wrapper">
                                <span className="phone-prefix">+7</span>
                                <input
                                    className="phone-input"
                                    type="text"
                                    name="phone"
                                    placeholder="(999) 999 99-99"
                                    value={this.state.phone}
                                    onChange={this.handlePhoneChange}
                                    maxLength={16}
                                />
                            </div>
                            {this.state.phoneError && <p className="error-text">{this.state.phoneError}</p>}
                        </div>

                        <div className="input-group">
                            <div className="input-wrapper">
                                <input
                                    className="password-input"
                                    type="password"
                                    name="password"
                                    placeholder="Введите пароль"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                />
                            </div>
                            {this.state.passwordError && <p className="error-text">{this.state.passwordError}</p>}
                        </div>

                        <button type="submit" className="login-btn">
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;