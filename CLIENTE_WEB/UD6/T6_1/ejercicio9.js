const img = document.querySelector('#imagenMostrada');
const div = document.querySelector('#contenedorImagen');

document.addEventListener('keydown', (evento) => {
    switch (evento.key) {
        case '0':
            img.setAttribute('src', 'imagen0.png');
            div.textContent = '';
            div.append(img);
            break;
        case '1':
            img.setAttribute('src', 'imagen1.png');
            div.textContent = '';
            div.append(img);
            break;
        case '2':
            img.setAttribute('src', 'imagen2.png');
            div.textContent = '';
            div.append(img);
            break;
        case '3':
            img.setAttribute('src', 'imagen3.png');
            div.textContent = '';
            div.append(img);
            break;
        default:
            div.textContent = 'Número no válido';
    }
});