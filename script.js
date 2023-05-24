const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
}

// Componente switch

const changeThemeCheckbox = document.querySelector('#changeTheme');
const htmlElement = document.documentElement;

changeThemeCheckbox.addEventListener('change', (e) => {
    const mode = htmlElement.getAttribute("mode");
    const newMode = mode === "dark" ? "light" : "dark";
    htmlElement.setAttribute("mode", newMode);

    localStorage.setItem("mode", newMode);
});

window.onload = () => {
    const mode = localStorage.getItem("mode");
    htmlElement.setAttribute("mode", mode);
}