let toggle = document.querySelector('#toggle')

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.querySelector('body').style.backgroundColor = "black"
        document.querySelector('body').style.color = "white"

    } else {
        document.querySelector('body').style.backgroundColor = "white"
        document.querySelector('body').style.color = "black"
    }
})