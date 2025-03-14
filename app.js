/* dropdown menu */
const navLinks = document.querySelectorAll("nav a");
const loginBtn = document.querySelector("nav button");
const openMenuBtn = document.getElementById("openMenuIcon");
const closeMenuBtn = document.getElementById("closeMenuIcon");

function openMenu(event) {
    event.target.parentElement.classList.add("showMenu");
    document.body.style.overflow = "hidden";
}

function closeMenu(event) {
    if (event.target.nodeName === "IMG") {
        event.target.parentElement.classList.remove("showMenu");
    } else {
        document.querySelector("nav").classList.remove("showMenu");
    }

    document.body.style.overflow = "auto";
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
        document.querySelector("nav").classList.remove("showMenu");
        document.body.style.overflow = "auto";
    }
})

navLinks.forEach(link => link.addEventListener("click", closeMenu));
loginBtn.addEventListener("click", closeMenu);
openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

/* switch features */
const features = document.querySelectorAll(".panel li");
const allTabs = document.querySelectorAll("#feature article");

function switchTab(event) {
    let tabTitle = event.target.textContent;

    features.forEach(li => li.classList.remove("current"));
    event.target.classList.add("current");

    allTabs.forEach(tab => tab.classList.remove("visible"));
    document.querySelector(`[data-tab="${tabTitle}"]`).classList.add("visible");
}

features.forEach((li) => li.addEventListener("click", switchTab));

/* FAQ */
const questionTitles = document.querySelectorAll(".title p");
const arrows = document.querySelectorAll(".arrow");

function toggleAnswer(event) {
    event.target.closest("article").classList.toggle("unfolded");
}

questionTitles.forEach((title) => title.addEventListener("click", toggleAnswer));
arrows.forEach((arrow) => arrow.addEventListener("click", toggleAnswer));

/* email validation */
const form = document.querySelector("form");
const inputBox = form.querySelector("div");
const input = form.querySelector("input");
const regex = /^([a-zA-Z0-9]{1,})+[a-zA-Z0-9._-]+@([a-zA-Z0-9]{1,})+([a-zA-Z0-9.-]{0,})+(\.[a-zA-Z]{2,})$/;
let validation;

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

form.addEventListener("submit", checkEmailAddr);
input.addEventListener("input", checkInputValue);

/* others */
document.querySelector("footer .menu img").addEventListener("click", () => window.location.href = "index.html");