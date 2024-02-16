let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        nav.classList.add("bg-info", "shadow");
    } else {
        nav.classList.remove("bg-info", "shadow");
    }
});
