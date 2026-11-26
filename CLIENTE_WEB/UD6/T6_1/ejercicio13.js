const queso = document.querySelector('#queso');

queso.addEventListener('mouseover', () => {
    const topVentana = Math.random() * Number(window.innerHeight-100);
    const leftVentana = Math.random() * Number(window.innerWidth-100);
    queso.style.top = topVentana + 'px';
    queso.style.left = leftVentana + 'px';
});