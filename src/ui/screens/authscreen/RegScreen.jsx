import "./AuthScreenStyle.css";
import React from "react";
import logo from "/src/assets/logo_ttt.svg";
import { Link } from "react-router-dom";
import {
    normalizePhoneInput,
    validatePhoneInput,
    validatePassword,
    validateEmail,
    validateRequired
} from "../../components/ComponentForAuth.js";

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            phoneError: "",
            emailError: "",
            passwordError: "",
            confirmPasswordError: "",
            firstNameError: "",
            lastNameError: "",
            agreedToTerms: false,
            agreedToTermsError: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value, [`${name}Error`]: "" });
    }

    handlePhoneChange({ target: { value } }) {
        this.setState((prevState) => ({
            phone: normalizePhoneInput(value, prevState.phone),
            phoneError: ""
        }));
    }

    handleCheckboxChange(e) {
        const { name, checked } = e.target;
        this.setState({ [name]: checked, [`${name}Error`]: "" });
    }

    validateForm() {
        const {
            phone, email, password, confirmPassword,
            firstName, lastName, agreedToTerms
        } = this.state;

        const phoneError = validatePhoneInput(phone);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const firstNameError = validateRequired(firstName, "Имя");
        const lastNameError = validateRequired(lastName, "Фамилия");

        let confirmPasswordError = "";
        if (!confirmPassword) {
            confirmPasswordError = "Пожалуйста, подтвердите пароль";
        } else if (confirmPassword !== password) {
            confirmPasswordError = "Пароли не совпадают";
        }

        let agreedToTermsError = "";
        if (!agreedToTerms) {
            agreedToTermsError = "Необходимо согласиться с условиями";
        }

        this.setState({
            phoneError,
            emailError,
            passwordError,
            confirmPasswordError,
            firstNameError,
            lastNameError,
            agreedToTermsError
        });

        return !(
            phoneError ||
            emailError ||
            passwordError ||
            confirmPasswordError ||
            firstNameError ||
            lastNameError ||
            agreedToTermsError
        );
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validateForm()) {
            const {
                phone, email, password, firstName, lastName
            } = this.state;

            // В реальном приложении здесь будет запрос на API
            setTimeout(() => {
                alert(`Регистрация успешна:\nТелефон: +7 ${phone}\nEmail: ${email}\nИмя: ${firstName}\nФамилия: ${lastName}`);
                // Здесь можно добавить редирект на главную страницу или страницу входа
            }, 300);
        }
    }

    render() {
        return (
            <div className="authscreen">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Логотип" />
                    </Link>
                </div>
                <div className="login-container register-container">
                    <h1 className="title">Регистрация в ТТТ-Банк</h1>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <div className="input-wrapper">
                                <input
                                    className="text-input"
                                    type="text"
                                    name="firstName"
                                    placeholder="Имя"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            {this.state.firstNameError && <p className="error-text">{this.state.firstNameError}</p>}
                        </div>

                        <div className="input-group">
                            <div className="input-wrapper">
                                <input
                                    className="text-input"
                                    type="text"
                                    name="lastName"
                                    placeholder="Фамилия"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            {this.state.lastNameError && <p className="error-text">{this.state.lastNameError}</p>}
                        </div>

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
                                    className="text-input"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            {this.state.emailError && <p className="error-text">{this.state.emailError}</p>}
                        </div>

                        <div className="input-group">
                            <div className="input-wrapper">
                                <input
                                    className="password-input"
                                    type="password"
                                    name="password"
                                    placeholder="Пароль"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            {this.state.passwordError && <p className="error-text">{this.state.passwordError}</p>}
                        </div>

                        <div className="input-group">
                            <div className="input-wrapper">
                                <input
                                    className="password-input"
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Подтвердите пароль"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            {this.state.confirmPasswordError && <p className="error-text">{this.state.confirmPasswordError}</p>}
                        </div>

                        <div className="checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="agreedToTerms"
                                    checked={this.state.agreedToTerms}
                                    onChange={this.handleCheckboxChange}
                                />
                                <span>Я согласен с <Link to="/UserAgreement" className="terms-link">условиями пользования</Link></span>
                            </label>
                            {this.state.agreedToTermsError && <p className="error-text">{this.state.agreedToTermsError}</p>}
                        </div>

                        <button type="submit" className="login-btn">
                            Зарегистрироваться
                        </button>

                        <div className="auth-links">
                            <span>Уже есть аккаунт?</span>
                            <Link to="/login" className="auth-link login-link">Войти</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterForm;