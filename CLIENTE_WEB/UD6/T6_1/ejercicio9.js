const estado = document.querySelector('#estado');
estado.textContent = (navigator.onLine)? 'Conectado' : 'Sin conexión';

window.ononline = () => {
    estado.textContent = 'Conectado';
};

window.onoffline = () => {
    estado.textContent = 'Sin conexión';
};