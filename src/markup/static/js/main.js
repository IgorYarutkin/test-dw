'use strict';

import polyfills from './libraries/polyfills';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
});

/* **** Подключение компонентов *********** */

const tabs = require('components/tabs/tabs');
const slider = require('components/slider/slider');
const userBLock = require('components/user-block/user-block.js');

userBLock();
tabs();
slider();
