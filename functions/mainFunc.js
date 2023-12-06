const button_burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');

const body = document.body;

button_burger.addEventListener('click', () => {
    menu.classList.toggle('changed');
    button_burger.classList.toggle('changed');

    body.style.overflow = menu.classList.contains('changed') ? 'hidden' : '';
});

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const inputSpan = input.parentNode.querySelector('span');

        if (input.value !== '') {
            inputSpan.style = `
                opacity: 1;
                transform: translate(0, 0);
            `;
        } else {
            inputSpan.style = `
                opacity: 0;
                transform: translate(0, 50%);
            `;
        }
    });
});