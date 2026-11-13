const atras = document.querySelector('#atras');
const adelante = document.querySelector('#adelante');

atras.onclick = () => {
    history.back();
};
adelante.onclick = () => {
    history.forward();
}