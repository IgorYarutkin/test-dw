'use strict';

const tabs = function () {

    const collectionTab = document.querySelectorAll('.tabs__link');
    const collectionContent = document.querySelectorAll('.tabs__content');

    const TAB_ACTIVE = 'tabs__link_active';
    const CONTENT_ACTIVE = 'tabs__content_active';

    // Обработчики событий

    function changeState() {
        Array.prototype.forEach.call(collectionTab, function (item) {
            item.classList.remove(TAB_ACTIVE);
        });
        Array.prototype.forEach.call(collectionContent, function (item) {
            item.classList.remove(CONTENT_ACTIVE);
        });
        const activeTab = window.location.hash.slice(1);
        document.getElementById(activeTab).classList.add(TAB_ACTIVE);
        document.getElementById(activeTab + '-content').classList.add(CONTENT_ACTIVE);
    }

    function writeHash(evt) {
        evt.preventDefault();
        window.location.hash = evt.currentTarget.id;
    }

    // Установка обработчиков событий
    Array.prototype.forEach.call(collectionTab, function (item) {
        item.addEventListener('click', writeHash);
    });
    window.addEventListener('hashchange', changeState);

    // проверка загрузки по скопированной адресной строке
    if (window.location.hash) {
        changeState();
    }
};

module.exports = tabs;
