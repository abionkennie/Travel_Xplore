const menuToggle = document.querySelector(".main-cover");
const showcase = document.querySelector(".toggle");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
});