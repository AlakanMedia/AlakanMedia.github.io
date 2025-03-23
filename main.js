const buttonImg = document.body.querySelector("#img-button");

buttonImg.addEventListener("click", (event) => {
    document.body.classList.toggle("light-mode");
});