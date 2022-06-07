document.addEventListener('keydown', (event) => {
    const windowHeight = window.innerHeight
    const mainElement = document.querySelector('main');
    const scrollTop = mainElement.scrollTop;

    if (event.code === 'ArrowLeft' || event.code === 'ArrowUp') {
        event.preventDefault()
        event.stopPropagation()
        mainElement.scrollTo({
            top: scrollTop - windowHeight,
            behavior: 'smooth'
        })
    }
    if (event.code === 'ArrowRight' || event.code === 'ArrowDown') {
        event.preventDefault()
        event.stopPropagation()
        mainElement.scrollTo({
            top: scrollTop + windowHeight,
            behavior: 'smooth'
        })
    }
})