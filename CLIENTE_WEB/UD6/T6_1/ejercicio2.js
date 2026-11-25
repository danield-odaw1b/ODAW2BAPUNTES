const boton = document.querySelector('#ver');
let input = document.querySelector('#clave');

boton.addEventListener('click', () => {
    if (input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text');
        boton.textContent = 'Ocultar';
    } else {
        input.setAttribute('type', 'password');
        boton.textContent = 'Mostrar';
    }
});