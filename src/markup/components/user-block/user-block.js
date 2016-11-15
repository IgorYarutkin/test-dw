'use strict';

const modal = require('components/modal-login/modal-login.js');
const userBLock = function () {

    const loginBlock = document.querySelector('.user-block__login');

    // Обработчики событий
    function login(evt) {
        evt.preventDefault();
        modal();
    }

    // Установка обработчиков событий
    loginBlock.addEventListener('click', login);

};

module.exports = userBLock;
