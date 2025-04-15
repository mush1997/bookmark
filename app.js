(function () {
    window.addEventListener("scroll", () => {
        window.location.hash ? window.location.hash = "" : "";
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760 && nav.classList.contains("showMenu")) {
            nav.classList.remove("showMenu");
            document.body.style.overflow = "auto";
        }
    });
})();

/* dropdown menu */
const nav = document.querySelector("header nav");
const navLinks = document.querySelectorAll("header nav a");
const loginBtn = document.querySelector("nav button");
const openMenuBtn = document.getElementById("openMenuIcon");
const closeMenuBtn = document.getElementById("closeMenuIcon");

navLinks.forEach(link => link.addEventListener("click", closeMenu));
loginBtn.addEventListener("click", closeMenu);
openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

function openMenu() {
    nav.classList.add("showMenu");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    if (window.innerWidth > 760) { return; }
    nav.classList.remove("showMenu");
    document.body.style.overflow = "auto";
}

/* switch features */
const tabs = document.querySelectorAll(".panel li");
tabs.forEach(li => li.addEventListener("click", switchTab));

function switchTab(event) {
    let tabTitle = event.target.textContent;
    document.querySelector(".current").classList.remove("current");
    document.querySelector(".show").classList.remove("show");
    event.target.classList.add("current");
    document.querySelector(`[data-tab="${tabTitle}"]`).classList.add("show");
}

/* FAQ */
const questionTitles = document.querySelectorAll(".title p");
const arrows = document.querySelectorAll(".arrow");

questionTitles.forEach(title => title.addEventListener("click", showHideAnswer));
arrows.forEach(arrow => arrow.addEventListener("click", showHideAnswer));

function showHideAnswer(event) {
    event.target.closest("article").classList.toggle("unfolded");
}

/* email validation */
const form = document.querySelector("form");
const inputBox = document.querySelector("form div");
const input = document.querySelector("form input");
const regex = /^([a-zA-Z0-9]{1,})+[a-zA-Z0-9._-]+@([a-zA-Z0-9]{1,})+([a-zA-Z0-9.-]{0,})+(\.[a-zA-Z]{2,})$/;
let validation;

form.addEventListener("submit", checkEmailAddr);
input.addEventListener("input", checkInputValue);

function checkEmailAddr(event) {
    event.preventDefault();
    checkInputValue();

    if (validation) {
        form.reset();
        alert("Thank you! We will contact you soon!");
    }
}

function checkInputValue() {
    validation = regex.test(input.value);

    if (!validation) {
        inputBox.classList.add("warning");
    } else {
        inputBox.classList.remove("warning");
    }
}

/* others */
document.querySelector("footer nav img").addEventListener("click", () => window.scrollTo(0, 0));