
const p = document.querySelector('p')
const input = document.querySelector('input')
const button = document.querySelector('button')

//button.addEventListener('click', () => p.textContent = input.value)

let currentImage = 0
button.addEventListener('click', () => currentImage + 1)
console.log(currentImage)

input.addEventListener('keydown', event => {
    if (event.code === 'Space') event.preventDefault()
})

p.addEventListener('mouseover', () => p.style.fontWeight = 'bold')
p.addEventListener('mouseout', () => p.style.fontWeight = 'normal')