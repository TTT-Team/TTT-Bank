
export const normalizePhoneInput = (value, previousValue) => {
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

export const validatePhoneInput = (value) => {
    let error = "";
    const digits = value.replace(/[^\d]/g, "");

    if (!value) error = "Поле обязательно!";
    else if (digits.length !== 10) error = "Некорректный номер телефона";

    return error;
};

export const validatePassword = (value, minLength = 6) => {
    let error = "";

    if (!value) error = "Поле обязательно!";
    else if (value.length < minLength) error = `Пароль должен содержать минимум ${minLength} символов`;

    return error;
};

export const validateRequired = (value, fieldName = "Поле") => {
    return value ? "" : `${fieldName} обязательно!`;
};

export const validateEmail = (value) => {
    let error = validateRequired(value, "Email");
    if (error) return error;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return "Некорректный email адрес";
    }

    return "";
};