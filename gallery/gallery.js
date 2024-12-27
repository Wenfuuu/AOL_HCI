document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function(){
        menu.classList.toggle('show');
    });
});

const S_slides = document.querySelectorAll("#slider1 img");
const S_slidesContainer = document.querySelector("#slider1 .slides");
let S_slideIndex = 0;
let S_intervalId = null;

document.addEventListener("DOMContentLoaded", S_initializeSlider);

function S_initializeSlider() {
    if (S_slides.length > 0) {
        S_intervalId = setInterval(S_nextSlide, 3000);
    }
}
function S_showSlide() {
    S_slidesContainer.style.transform = `translateX(-${S_slideIndex * 100}%)`;
}
function S_nextSlide() {
    clearInterval(S_intervalId);
    S_slideIndex++;
    if (S_slideIndex >= S_slides.length) {
        S_slideIndex = 0;
    }
    S_showSlide();
    S_intervalId = setInterval(S_nextSlide, 3000);
}
function S_prevSlide() {
    clearInterval(S_intervalId);
    S_slideIndex--;
    if (S_slideIndex < 0) {
        S_slideIndex = S_slides.length - 1;
    }
    S_showSlide();
    S_intervalId = setInterval(S_nextSlide, 3000);
}

const A_slides = document.querySelectorAll("#slider2 img");
const A_slidesContainer = document.querySelector("#slider2 .slides");
let A_slideIndex = 0;
let A_intervalId = null;

document.addEventListener("DOMContentLoaded", A_initializeSlider);

function A_initializeSlider() {
    if (A_slides.length > 0) {
        A_intervalId = setInterval(A_nextSlide, 3000);
    }
}
function A_showSlide() {
    A_slidesContainer.style.transform = `translateX(-${A_slideIndex * 100}%)`;
}
function A_nextSlide() {
    clearInterval(A_intervalId);
    A_slideIndex++;
    if (A_slideIndex >= A_slides.length) {
        A_slideIndex = 0;
    }
    A_showSlide();
    A_intervalId = setInterval(A_nextSlide, 3000);
}
function A_prevSlide() {
    clearInterval(A_intervalId);
    A_slideIndex--;
    if (A_slideIndex < 0) {
        A_slideIndex = A_slides.length - 1;
    }
    A_showSlide();
    A_intervalId = setInterval(A_nextSlide, 3000);
}

const B_slides = document.querySelectorAll("#slider3 img");
const B_slidesContainer = document.querySelector("#slider3 .slides");
let B_slideIndex = 0;
let B_intervalId = null;

document.addEventListener("DOMContentLoaded", B_initializeSlider);

function B_initializeSlider() {
    if (B_slides.length > 0) {
        B_intervalId = setInterval(B_nextSlide, 3000);
    }
}
function B_showSlide() {
    B_slidesContainer.style.transform = `translateX(-${B_slideIndex * 100}%)`;
}
function B_nextSlide() {
    clearInterval(B_intervalId);
    B_slideIndex++;
    if (B_slideIndex >= B_slides.length) {
        B_slideIndex = 0;
    }
    B_showSlide();
    B_intervalId = setInterval(B_nextSlide, 3000);
}
function B_prevSlide() {
    clearInterval(B_intervalId);
    B_slideIndex--;
    if (B_slideIndex < 0) {
        B_slideIndex = B_slides.length - 1;
    }
    B_showSlide();
    B_intervalId = setInterval(B_nextSlide, 3000);
}

const C_slides = document.querySelectorAll("#slider4 img");
const C_slidesContainer = document.querySelector("#slider4 .slides");
let C_slideIndex = 0;
let C_intervalId = null;

document.addEventListener("DOMContentLoaded", C_initializeSlider);

function C_initializeSlider() {
    if (C_slides.length > 0) {
        C_intervalId = setInterval(C_nextSlide, 3000);
    }
}
function C_showSlide() {
    C_slidesContainer.style.transform = `translateX(-${C_slideIndex * 100}%)`;
}
function C_nextSlide() {
    clearInterval(C_intervalId);
    C_slideIndex++;
    if (C_slideIndex >= C_slides.length) {
        C_slideIndex = 0;
    }
    C_showSlide();
    C_intervalId = setInterval(C_nextSlide, 3000);
}
function C_prevSlide() {
    clearInterval(C_intervalId);
    C_slideIndex--;
    if (C_slideIndex < 0) {
        C_slideIndex = C_slides.length - 1;
    }
    C_showSlide();
    C_intervalId = setInterval(C_nextSlide, 3000);
}

const D_slides = document.querySelectorAll("#slider5 img");
const D_slidesContainer = document.querySelector("#slider5 .slides");
let D_slideIndex = 0;
let D_intervalId = null;

document.addEventListener("DOMContentLoaded", D_initializeSlider);

function D_initializeSlider() {
    if (D_slides.length > 0) {
        D_intervalId = setInterval(D_nextSlide, 3000);
    }
}
function D_showSlide() {
    D_slidesContainer.style.transform = `translateX(-${D_slideIndex * 100}%)`;
}
function D_nextSlide() {
    clearInterval(D_intervalId);
    D_slideIndex++;
    if (D_slideIndex >= D_slides.length) {
        D_slideIndex = 0;
    }
    D_showSlide();
    D_intervalId = setInterval(D_nextSlide, 3000);
}
function D_prevSlide() {
    clearInterval(D_intervalId);
    D_slideIndex--;
    if (D_slideIndex < 0) {
        D_slideIndex = D_slides.length - 1;
    }
    D_showSlide();
    D_intervalId = setInterval(D_nextSlide, 3000);
}