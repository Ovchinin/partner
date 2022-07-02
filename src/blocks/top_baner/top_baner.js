const left = document.querySelector(".baner--left");
const right = document.querySelector(".baner--right");
const wrap = document.querySelector(".top-baner .container");

left.addEventListener("mouseenter", () => {
    wrap.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
    wrap.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
    wrap.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
    wrap.classList.remove("hover-right");
});