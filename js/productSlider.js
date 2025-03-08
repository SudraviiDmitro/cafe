// Додаємо слухача події, який виконується після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо слайдер та кнопки
    const slider = document.querySelector('.popular__slider');
    const prevBtn = document.getElementById('prev__btn');
    const nextBtn = document.getElementById('next__btn');

    // Ширина одного слайда плюс відступ (gap)
    const slideWidth = 285 + 20; // ширина слайда + gap
    // Кількість слайдів, які відображаються одночасно
    const visibleSlides = 4; // кількість видимих слайдів
    // Загальна кількість слайдів
    const totalSlides = slider.children.length; // загальна кількість слайдів

    // Поточна позиція слайдера
    let currentPosition = 0;

    // Функція для оновлення позиції слайдера при зміні currentPosition
    function updateSliderPosition() {
        // Переміщаємо слайдер вліво на кількість пікселів, відповідно до поточної позиції
        slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
    }

    // Обробник події для кнопки попереднього слайда
    prevBtn.addEventListener('click', () => {
        // Якщо поточна позиція більша за 0, зменшуємо позицію
        if (currentPosition > 0) {
            currentPosition--;
            updateSliderPosition(); // Оновлюємо позицію слайдера
        }
    });

    // Обробник події для кнопки наступного слайда
    nextBtn.addEventListener('click', () => {
        // Якщо поточна позиція менша за кількість слайдів мінус видимі слайди
        if (currentPosition < totalSlides - visibleSlides) {
            currentPosition++;
            updateSliderPosition(); // Оновлюємо позицію слайдера
        }
    });
});
