const preguntas = document.querySelectorAll('h3');

preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', () => {
        pregunta.nextElementSibling.toggleAttribute('hidden');
    });
});
