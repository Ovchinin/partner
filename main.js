(() => { var e = { 713: () => { var e = document.querySelector(".cookies"); document.querySelector(".cookies__btn").addEventListener("click", (function () { e.style.display = "none" })) }, 547: () => { var e, t; e = document.querySelector(".copyright-block__year"), t = (new Date).getFullYear(), e.innerHTML = t }, 471: () => { window.onscroll = function () { window.pageYOffset > t ? e.classList.add("sticky") : e.classList.remove("sticky") }; var e = document.querySelector(".header"), t = e.offsetTop }, 121: () => { var e; e = document.querySelectorAll(".nav__btn"), Array.prototype.forEach.call(e, (function (e) { e.addEventListener("click", (function () { var t = e.parentElement.children; Array.prototype.forEach.call(t, (function (e) { e.classList.toggle("show") })) })) })) }, 700: () => { var e = document.querySelector(".scroll-to-top"); window.addEventListener("scroll", (function () { document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? e.style.display = "block" : e.style.display = "none" })), e.addEventListener("click", (function () { document.documentElement.scrollTo({ top: 0, behavior: "smooth" }) })) }, 802: () => { var e = document.querySelector(".baner--left"), t = document.querySelector(".baner--right"), o = document.querySelector(".top-baner .container"); e.addEventListener("mouseenter", (function () { o.classList.add("hover-left") })), e.addEventListener("mouseleave", (function () { o.classList.remove("hover-left") })), t.addEventListener("mouseenter", (function () { o.classList.add("hover-right") })), t.addEventListener("mouseleave", (function () { o.classList.remove("hover-right") })) } }, t = {}; function o(r) { var n = t[r]; if (void 0 !== n) return n.exports; var c = t[r] = { exports: {} }; return e[r](c, c.exports, o), c.exports } o.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return o.d(t, { a: t }), t }, o.d = (e, t) => { for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => { "use strict"; o(471), o(121), o(802), o(547), o(700), o(713) })() })();