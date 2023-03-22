const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

const sectionButton = document.querySelector('.sectionButton');
const pButton = document.querySelector('.pButton');
const innerButton = document.querySelector('.innerButton');

sectionButton.addEventListener('click', function (e) {
    e.stopPropagation();
})
pButton.addEventListener('click', function (e) {
    e.stopPropagation();
})
innerButton.addEventListener('click', function (e) {
    e.stopPropagation();
})

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
