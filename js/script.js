{
    function welcome() {
        console.log("Cześć!");
    };
    welcome();

    const onChangeHeaderColor = () => {
        const headerTitle = document.querySelector(".js-headerTitle");
        headerTitle.classList.toggle("header__title--newClass");
    };

    const removePhoto = (buttonRemovePhoto) => {
        const headerPhoto = document.querySelector(".js-headerPhoto");

        headerPhoto.remove();
        buttonRemovePhoto.remove();
    };

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--brightDark");
        themeName.innerText = body.classList.contains("brightDark") ? "jaśniejszy" : "ciemniejszy"
    };

    const init = () => {
        const buttonChangeColor = document.querySelector(".js-buttonChangeColor");
        buttonChangeColor.addEventListener("click", onChangeHeaderColor);

        const buttonRemovePhoto = document.querySelector(".js-buttonRemovePhoto");
        buttonRemovePhoto.addEventListener("click", () => {
            removePhoto(buttonRemovePhoto)
        });

        const buttonChangeBackground = document.querySelector(".js-buttonChangeBackground");
        buttonChangeBackground.addEventListener("click", onChangeBackgroundClick);
    };
    init();

}