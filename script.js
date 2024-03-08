const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});
//code of page3
let page3 = document.querySelector("#full-container");
let fixed = document.querySelector("#fixed-image");
page3.addEventListener("mouseenter", () => {
    fixed.style.display = "block";
});
page3.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
});

let all = document.querySelectorAll(".page-container-3");
all.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        let img = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${img})`;
    });
});
//end code page 3
function swiperanimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });
}
swiperanimation();

let img = document.querySelector("header img");
let h3 = document.querySelector(".menu");
let full = document.querySelector("#full-navbar");
count = 0;
h3.addEventListener("click", () => {
    if (count == 0) {
        full.style.top = 0;
        img.style.opacity = 0;
        count = 1;
    } else {
        full.style.top = `-100%`;
        img.style.opacity = 100;
        count = 0;
    }
});
// h3.removeEventListener()

//loader

// let loader = document.querySelector("#loader");
// setTimeout(() => {
// loader.style.top ="-100%"
// }, 3000);

//gsap

let tl = gsap.timeline();
tl.to("#loader", {
    top: "-100%",
    delay: 3.4,
    duration: 0.9,
});
tl.from("#nav h4", {
    opacity: 0,
    duration: 0.5,
    delay: 0.4,
    stagger: 0.4,
    y: -90,
});

tl.from("#left h3", {
    x: -80,
    opacity: 0,
    duration: 0.4,
});
tl.from("#right h1", {
    x: 80,
    opacity: 0,
    duration: 0.4,
});