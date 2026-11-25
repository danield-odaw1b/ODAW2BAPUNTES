const texto = document.querySelector('#texto');
const botones = document.querySelectorAll('button');

botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        texto.textContent = texto.textContent.replaceAll(boton.textContent.toLocaleLowerCase(), '');
        texto.textContent =texto.textContent.replaceAll(boton.textContent, '');
    });
});
