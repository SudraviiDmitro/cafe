const startAnimation = (column, direction) => {
    const speed = 1; // Швидкість анімації (менше значення - повільніше)
    let scrollAmount = 0;

    const animate = () => {
        if (direction === "up") {
            column.scrollTop += speed;
            scrollAmount += speed;
        } else {
            column.scrollTop -= speed;
            scrollAmount -= speed;
        }

        // Перевіряємо, якщо прокручено весь блок - повертаємо в початок
        if (direction === "up" && scrollAmount >= column.scrollHeight / 2) {
            column.scrollTop = 0;
            scrollAmount = 0;
        } else if (direction === "down" && scrollAmount <= 0) {
            column.scrollTop = column.scrollHeight / 2;
            scrollAmount = column.scrollHeight / 2;
        }

        requestAnimationFrame(animate);
    };

    // Дублюємо вміст, щоб створити ефект безперервної прокрутки
    column.innerHTML += column.innerHTML;

    // Додаємо невелику затримку перед запуском анімації
    setTimeout(() => requestAnimationFrame(animate), 100);
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".column-up").forEach(column => startAnimation(column, "up"));
    document.querySelectorAll(".column-down").forEach(column => startAnimation(column, "down"));
});