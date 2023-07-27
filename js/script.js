{
    function welcome() {
        console.log("Cześć!");
    };
    welcome();

    const onChangeHeaderColor = () => {
        const headerTitle = document.querySelector(".js-headerTitle");
        headerTitle.classList.toggle("header__title--newClass");
    };

    const removePhoto = () => {
        const headerPhoto = document.querySelector(".js-headerPhoto");
        const buttonRemovePhoto = document.querySelector(".js-buttonRemovePhoto");

        buttonRemovePhoto.addEventListener("click", () => {
            headerPhoto.remove();
            buttonRemovePhoto.remove();
        });
    };
    removePhoto();

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--brightDark");
        themeName.innerText = body.classList.contains("brightDark") ? "jaśniejszy" : "ciemniejszy"
    };

    const init = () => {
        const buttonChangeColor = document.querySelector(".js-buttonChangeColor");
        buttonChangeColor.addEventListener("click", onChangeHeaderColor);

        const buttonChangeBackground = document.querySelector(".js-buttonChangeBackground");
        buttonChangeBackground.addEventListener("click", onChangeBackgroundClick);
    };
    init();

}