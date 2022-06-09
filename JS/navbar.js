const navbar = document.getElementById("navbar");

const openBtn = document.getElementById("openBtn");

const closeBtn = document.getElementById("closeBtn");

function openNav() {
    navbar.classList.remove("disable");
    navbar.classList.add("active");
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
}

function closeNav() {
    navbar.classList.remove("active");
    navbar.classList.add("disable");
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
}


const portaModalList = document.getElementsByClassName('modal');
const modalContainer = document.getElementById('modalCont');

function portaOpenModal(modalToOpen) {
    var modal = portaModalList[modalToOpen];
    modalContainer.classList.add("modalActive");
    modal.classList.add("modalActiveB");
}

function portaCloseModal(modalToOpen) {
    var modal = portaModalList[modalToOpen];
    modalContainer.classList.remove("modalActive");
    modal.classList.remove("modalActiveB");
}