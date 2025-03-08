const plusButtons = document.querySelectorAll(".plus__btn");
const favouriteButtons = document.querySelectorAll(".product__favorite");

function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )'+ name + '=([^;]+)'));
    return match ? match[2] : null;
}   

function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/; max-age=31536000`;
}

document.addEventListener("DOMContentLoaded", function() {
    plusButtons.forEach((btn, index) => {
        const icon = btn.querySelector("i");
        const storedState = getCookie(`plusBtn${index}`);

        if (storedState === "checked") {
            icon.classList.replace("fa-plus", "fa-check");
            btn.style.backgroundColor = "#008D59";
        }

        btn.addEventListener("click", function(){
            if (icon.classList.contains("fa-plus")) {
                icon.classList.replace("fa-plus", "fa-check");
                btn.style.backgroundColor = "#008D59";
                setCookie(`plusBtn&{index}`, "checked");
            } else {
                icon.classList.replace("fa-check", "fa-plus");
                btn.style.backgroundColor = "black";
                setCookie(`plusBtn&{index}`, "unchecked");
            }
        });
    });

    favouriteButtons.forEach((btn, index) => {
        const icon = btn.querySelector("i");
        const storedState = getCookie(`plusBtn${index}`);

        if (storedState === "liked") {
            icon.classList.replace("fa-regular", "fa-solid");
            icon.style.color = "#B71C1C";
        }

        btn.addEventListener("click", function () {
            if(icon.classList.contains("fa-regular")) {
                icon.classList.replace("fa-regular", "fa-solid");
                icon.style.color = "#B71C1C";
                setCookie(`favBtn&{index}`, "liked");
            } else {
                icon.classList.replace("fa-solid", "fa-regular");
                icon.style.color = "black";
                setCookie(`favBtn&{index}`, "unliked");
            }
        });
    });
});