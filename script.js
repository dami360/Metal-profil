import "/style.scss"

const nav = document.querySelector(".nav");
const menuOptions = nav.querySelectorAll("a");
const navButton = document.querySelector(".nav-button");

navButton.onclick = () => {
    nav.classList.toggle("active");
    navButton.classList.toggle("active");
}

menuOptions.forEach((option) => {
    option.onclick = () => {
        nav.classList.remove("active");
        navButton.classList.remove("active");
    }
})