let corazon = document.querySelector('#elementoSigueCursor');

document.addEventListener('mousemove', (evento) => {
    const y = evento.pageY;
    const x = evento.pageX;
    corazon.style.left = x + 'px';
    corazon.style.top = y + 'px';
});