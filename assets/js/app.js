// navbar color de fondo cuando se hace scroll
let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        nav.classList.add("bg-info", "shadow");
    } else {
        nav.classList.remove("bg-info", "shadow");
    }
});

// tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// boton enviar
let botonEnviar = document.querySelector("#botonEnviar");

botonEnviar.addEventListener("click", function () {
    alert("Mensaje enviado correctamente");
});
