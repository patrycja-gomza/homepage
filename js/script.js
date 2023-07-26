{
    function welcome() {
        console.log("Cześć!");
    };
    welcome();

    const onChangeHeaderColor = () => {
        const headerTitle = document.querySelector(".js-headerTitle");
        headerTitle.classList.toggle("header__title--newClass");
    };
    const init1 = () => {
        const buttonChangeColor = document.querySelector(".js-buttonChangeColor");
        buttonChangeColor.addEventListener("click", onChangeHeaderColor);
    };
    init1();

    const removePhoto = () => {
        const headerPhoto = document.querySelector(".js-headerPhoto");
        headerPhoto.remove();
    };
    const deleteButtonRemovePhoto = () => {
        const buttonRemovePhoto = document.querySelector(".js-buttonRemovePhoto");
        buttonRemovePhoto.remove();
    };
    const init2 = () => {
        const buttonRemovePhoto = document.querySelector(".js-buttonRemovePhoto");
        buttonRemovePhoto.addEventListener("click", removePhoto);
        buttonRemovePhoto.addEventListener("click", deleteButtonRemovePhoto);
    };
    init2();

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--brightDark");
        themeName.innerText = body.classList.contains("brightDark") ? "jaśniejszy" : "ciemniejszy"
    };
    const init3 = () => {
        const buttonChangeBackground = document.querySelector(".js-buttonChangeBackground");
        buttonChangeBackground.addEventListener("click", onChangeBackgroundClick);
    };
    init3();
}