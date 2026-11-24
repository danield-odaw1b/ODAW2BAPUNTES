const botonAZ = document.querySelector('#az');
const botonZA = document.querySelector('#za');

const lista = document.querySelector('#nombres');

botonAZ.addEventListener('click', () => {
    const array = [...lista.children];
    array.sort((a,b) => a.textContent.localeCompare(b.textContent));
    for (let nombre of array) {
        lista.append(nombre);
    }

});

botonZA.addEventListener('click', () => {
    const array = [...lista.children];
    array.sort((b,a) => a.textContent.localeCompare(b.textContent));
    for (let nombre of array) {
        lista.append(nombre);
    }
});

