const botonAgregar = document.querySelector('#anadir');
let texto = document.querySelector('#nueva');
const lista = document.querySelector('#lista');

botonAgregar.addEventListener('click', () => {
    if (texto.value.trim() != '' && texto.value.trim() != null) {
        const li = document.createElement('li');
        li.textContent = texto.value.trim();

        const botonNuevo = document.createElement('button');
        botonNuevo.textContent = 'Borrar';
        botonNuevo.addEventListener('click', () => {
            botonNuevo.closest('li').remove();
        });

        li.append(botonNuevo);
        lista.append(li);

        texto.value = '';
    }
});