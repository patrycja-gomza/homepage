console.log("Cześć!");

let buttonChangeColor = document.querySelector(".js-buttonChangeColor");
let headerTitle = document.querySelector(".js-headerTitle");

buttonChangeColor.addEventListener("click", () => {
    headerTitle.classList.toggle("header__title--newClass");
});

let buttonRemovePhoto = document.querySelector(".js-buttonRemovePhoto");
let headerPhoto = document.querySelector(".js-headerPhoto");

buttonRemovePhoto.addEventListener("click", () => {
    headerPhoto.remove();
    buttonRemovePhoto.remove();
});

let buttonChangeBackground = document.querySelector(".js-buttonChangeBackground");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

buttonChangeBackground.addEventListener("click", () => {
    body.classList.toggle("body--brightDark");
    themeName.innerText = body.classList.contains("brightDark") ? "jaśniejszy" : "ciemniejszy";
});