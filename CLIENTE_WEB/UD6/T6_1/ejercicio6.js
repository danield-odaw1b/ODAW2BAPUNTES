const tareas = document.querySelectorAll('#tareas li');
let cont = document.querySelector('#pendientes');
aux = document.querySelectorAll('#tareas li:not(.hecha)');
cont.textContent = 'Quedan ' + aux.length  + ' tareas';

tareas.forEach((tarea) => {
    tarea.addEventListener('click', () => {
        tarea.classList.toggle('hecha');

        aux = document.querySelectorAll('#tareas li:not(.hecha)');
        if (aux.length > 1){
            cont.textContent = 'Quedan ' + aux.length + ' tareas';
        } else if (aux.length == 1) {
            cont.textContent = 'Queda '+ aux.length + ' tarea';
        } else {
            cont.textContent = 'No quedan tareas';
        }
    });
});