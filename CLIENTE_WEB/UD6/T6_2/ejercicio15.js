const botonAgregar = document.querySelector('#anadir');
let texto = document.querySelector('#nueva');
const lista = document.querySelector('#lista');

const botonBorrar = document.querySelectorAll('#borrar');

botonAgregar.addEventListener('click', () => {
    if (texto.value.trim() != '' && texto.value.trim() != null) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = texto.value.trim();
        const botonNuevo = document.createElement('button');
        botonNuevo.textContent = 'Borrar';
        botonNuevo.setAttribute('id', 'borrar');

        li.append(span); li.append(botonNuevo);
        lista.append(li);
    }
});

for (let boton of botonBorrar) {
    boton.addEventListener('click', () => {
        const liBorrar = boton.closest('li');
        lista.remove(liBorrar);
    });
}