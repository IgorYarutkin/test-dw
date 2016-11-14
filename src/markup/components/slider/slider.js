'use strict';

const slider = function () {

    const collectionSlider = document.querySelectorAll('.slider');

    const SLIDE_ACTIVE = '.slider__item_active';
    const SLIDE_ACTIVE_CLASS = 'slider__item_active';
    const SLIDE = '.slider__item';

    // Обработчики событий
    function changeSlide(evt) {
        const currentCollectionSlider = evt.currentTarget.querySelectorAll(SLIDE);
        // let newSlide;
        let currentSliderNumber = parseInt(evt.currentTarget.querySelector(SLIDE_ACTIVE).id.split('-')[1], 10);
        Array.prototype.forEach.call(currentCollectionSlider, function (item) {
            item.classList.remove(SLIDE_ACTIVE_CLASS);
        });
        if (evt.target.getAttribute('data-change') === 'up') {
            currentSliderNumber++;
            if (currentSliderNumber === currentCollectionSlider.length) {
                currentSliderNumber = 0;
            }
        } else {
            currentSliderNumber--;
            if (currentSliderNumber < 0) {
                currentSliderNumber = currentCollectionSlider.length - 1;
            }
        }
        currentCollectionSlider[currentSliderNumber].classList.add(SLIDE_ACTIVE_CLASS);
    }

    // Установка обработчиков
    Array.prototype.forEach.call(collectionSlider, function (item) {
        item.addEventListener('click', changeSlide);
    });

};

module.exports = slider;
