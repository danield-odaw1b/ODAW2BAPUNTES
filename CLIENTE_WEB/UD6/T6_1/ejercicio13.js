const queso = document.querySelector('#queso');

queso.addEventListener('mouseover', () => {
    const topVentana = window.innerHeight-100;
    const leftVentana = window.innerWidth-100;
    queso.style.top = Math.floor(Math.random() * (topVentana + 1)) + 'px';
    queso.style.left = Math.floor(Math.random() * (leftVentana + 1)) + 'px';
});