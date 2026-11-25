const boton = document.querySelector('#saludar');
boton.onclick = () => {
    const nombre = prompt('¿Cómo te llamas?');
    if (nombre !== null && nombre !== ''){
        alert('Hola, ' + nombre);
    }
}

