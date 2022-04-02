const input_direccion = document.getElementById("input_direccion");
const spinner_load = document.getElementById("spinner_load");
const send = document.getElementById("send");
const solicitar = document.getElementById("solicitar");
const calificar = document.getElementById("calificar");
const map_google = document.querySelector(".map_google");

send.addEventListener("click", (e) => {
    e.preventDefault()
    spinner_load.classList.add("loader");
    setTimeout(() => {
        spinner_load.classList.remove("loader");
        solicitar.classList.remove("solicitar");
    }, 1000);
    solicitar.classList.add("btn-send-solicitud");
    calificar.classList.replace("clasificacion","mostrar_clasificacion");
})
solicitar.addEventListener("click", (e) => {
    e.preventDefault()
    location.href="reservar_cita.html";
})
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
})
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})
const salir = document.getElementById("salir");
salir.addEventListener("click", (e) => {
    e.preventDefault()
    location.href="/index.html"
})