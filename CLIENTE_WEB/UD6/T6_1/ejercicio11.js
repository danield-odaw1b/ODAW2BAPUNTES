const contenido = document.querySelector('#contenido');
const boton = document.querySelector('#limpiarBtn');

document.addEventListener('keydown', (evento) => {
    if (evento.key.length === 1){
        contenido.textContent = contenido.textContent + evento.key;
    }
});

boton.addEventListener('click', () => {
    contenido.textContent = '';
});