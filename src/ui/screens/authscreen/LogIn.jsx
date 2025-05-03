import "./AuthScreenStyle.css";
import React from "react";
import logo from "/src/assets/logo_ttt.svg";
import { Link } from "react-router-dom";
import {
    normalizePhoneInput,
    validatePhoneInput,
    validatePassword
} from "../../components/ComponentForAuth.js"

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
            phone: normalizePhoneInput(value, prevState.phone),
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
        const phoneError = validatePhoneInput(this.state.phone);
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
                        <div className="auth-links">
                            <Link to="/RegScreen" className="auth-link register-link">Зарегистрироваться</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;