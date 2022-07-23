const element = document.querySelectorAll('.slide')

element.forEach( (slide) => {
    slide.addEventListener("click", () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
})

function clearActiveClasses() {
    element.forEach((event) => {
        event.classList.remove('active')
    })
}