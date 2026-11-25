const saludo = document.querySelector('#saludo');
const input = document.querySelector('#nombre');

const guardar = document.querySelector('#guardar');
const olvidar = document.querySelector('#olvidar');

const vueltaConectado = document.cookie.split('; ');
for (let nombreConjunto of vueltaConectado) {
    const arrayNombre = nombreConjunto.split('=');
    const claveNombre = arrayNombre[0];
    const textoNombre = arrayNombre[1];
    if (claveNombre == 'nombre') {
        saludo.textContent = 'Hola de nuevo, ' + decodeURIComponent(textoNombre);
    }
}

guardar.addEventListener('click', () => {
    const nombre = input.value.trim();
    if (nombre !== ''){
        document.cookie = 'nombre=' + encodeURIComponent(nombre) + '; max-age=604800';
        saludo.textContent = 'Hola, ' + nombre;
    }
});

olvidar.addEventListener('click', () => {
    document.cookie = 'nombre=; max-age=0';
    saludo.textContent = '';
});