function showMenu(element) {
    let btn = document.querySelectorAll(element)
    Array.prototype.forEach.call(btn, elem => {
        elem.addEventListener("click", function () {
            let parent = elem.parentElement
            let childrens = parent.children
            Array.prototype.forEach.call(childrens, childrens_item => {
                childrens_item.classList.toggle("show")
            })
        })
    })
}

showMenu(".nav__btn")