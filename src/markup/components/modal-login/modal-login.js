'use strict';

const modalLogin = function () {

    const modalWindow = document.querySelector('.modal-login');
    const overlay = document.querySelector('.modal-overlay');
    const closeButton = modalWindow.querySelector('.modal-login__btn-close');
    const loginInput = modalWindow.querySelector('input[name="login"]');
    const passwordInput = modalWindow.querySelector('input[name="password"]');
    const submitButton = modalWindow.querySelector('.modal-login__submit');

    const MODAL_WINDOW_ACTIVE = 'modal-login_active';
    const OVERLAY_ACTIVE = 'modal-overlay_active';
    const VALID = 'input__control_valid';
    const EMPTY = 'input__control_empty';

    let validEmail;
    let validPassword;

    // Обработчики
    function validateLogin() {
        loginInput.classList.toggle(EMPTY, !loginInput.value);
        validEmail = loginInput.value.match(/.+@.+\..+/i);
        loginInput.classList.toggle(VALID, validEmail);
        submitButton.disabled = !(validEmail && validPassword);
    }
    function validatePassword() {
        passwordInput.classList.toggle(EMPTY, !passwordInput.value);
        validPassword = passwordInput.value.match(/^\w{6,12}$/i);
        passwordInput.classList.toggle(VALID, validPassword);
        submitButton.disabled = !(validEmail && validPassword);
    }
    function onClose() {
        closeButton.removeEventListener('click', onClose);
        loginInput.removeEventListener('input', validateLogin);
        passwordInput.removeEventListener('input', validatePassword);
        passwordInput.value = '';
        modalWindow.classList.remove(MODAL_WINDOW_ACTIVE);
        overlay.classList.remove(OVERLAY_ACTIVE);
    }

    const onStart = function () {
        modalWindow.classList.add(MODAL_WINDOW_ACTIVE);
        overlay.classList.add(OVERLAY_ACTIVE);
        closeButton.addEventListener('click', onClose);
        loginInput.addEventListener('input', validateLogin);
        passwordInput.addEventListener('input', validatePassword);
        loginInput.classList.toggle(EMPTY, !loginInput.value);
        passwordInput.classList.toggle(EMPTY, !passwordInput.value);
        submitButton.disabled = !(validEmail && validPassword);
        loginInput.focus();
    };

    return onStart();
};

module.exports = modalLogin;
