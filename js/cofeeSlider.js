const slider = document.querySelector(".coffee__slider");
const items = document.querySelectorAll(".coffee__slider-item");
const totalItems = items.length;
const transitionDuration = "0.5s";
const visibleItems = 3;
const offsetPercentage = 100 / visibleItems;

let currentIndex = 2;
let intervalTime = 5000;

const updateSlider = () => {
    items.forEach((item, index) => {
        const img = item.querySelector("img");
        img.removeAttribute("id");
        if(index === currentIndex) {
            img.id = "main-image";
        }
    });

    const offset = -(currentIndex - 1) * offsetPercentage;
    slider.style.transform = `translateX(${offset}%)`; 
};

const resetSlider = () => {
    if(currentIndex === 1) {
        currentIndex = totalItems - (visibleItems + 1);
        slider.style.transition = "none";
        updateSlider();
        setTimeout(() => (slider.style.transition = `tranform ${transitionDuration} ease-in-out`));
    }
    else if (currentIndex === totalItems - 2) {
        currentIndex = 2
        slider.style.transition = "none"
        updateSlider()
        setTimeout(() => (slider.style.transition = `tranform ${transitionDuration} ease-in-out`));
    }
};

const startSlider = () => {
    setInterval(() => {
        currentIndex++;
        updateSlider();
        setTimeout(resetSlider, parseFloat(transitionDuration) * 1000);
    }, intervalTime);
};

document.addEventListener("DOMContentLoaded", () => {
    updateSlider();
    startSlider();
});
