const subir = document.querySelectorAll('.subir');
const bajar = document.querySelectorAll('.bajar');

for (let boton of subir){
    boton.addEventListener('click', () => {
        const ciudad = boton.closest('li');
        const superior = ciudad.previousElementSibling;
        if (superior != null){
            superior.before(ciudad);
        }
    });
}

for (let boton2 of bajar){
    boton2.addEventListener('click', () => {
        const ciudad2 = boton2.closest('li');
        const superior2 = ciudad2.nextElementSibling;
        if (superior2 != null){
            superior2.after(ciudad2);
        }
    });
}