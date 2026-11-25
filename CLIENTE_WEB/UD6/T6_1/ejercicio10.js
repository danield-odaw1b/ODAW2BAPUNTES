const caja = document.querySelector('#caja');
let topMedida = 400;
let leftMedida = 100;
caja.style.left = '100px';
caja.style.top = '400px';


document.addEventListener('keydown', (evento) => {
    switch (evento.key) {
        case 'ArrowUp':
            topMedida = topMedida - 10;
            caja.style.top = topMedida + 'px';
            break;
        case 'ArrowDown':
            topMedida = topMedida + 10;
            caja.style.top = topMedida + 'px';
            break;
        case 'ArrowLeft':
            leftMedida = leftMedida - 10;
            caja.style.left = leftMedida + 'px';
            break;
        case 'ArrowRight':
            leftMedida = leftMedida + 10;
            caja.style.left = leftMedida + 'px';   
            break;
        default:

    };
});