const queso = document.querySelector('#queso');

queso.addEventListener('mouseover', () => {
    const randomTop = Math.random()*(window.innerHeight-100);
    const randomLeft = Math.random()*(window.innerWidth-100);
    queso.style.top = randomTop + 'px';
    queso.style.left = randomLeft + 'px';
});