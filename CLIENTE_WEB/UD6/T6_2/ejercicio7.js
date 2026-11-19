const listaStrings = ['Manzana', 'Banana', 'Naranja', 'Pera', 'Uva', 'Melón', 'Sandía', 'Piña'];

const campo = document.querySelector('#inputBusqueda');
let lista = document.querySelector('#listaAutocompletar');
listaStrings.forEach((string) =>{
    let li = document.createElement('li');
    li.textContent = string;
    lista.append(li);
});

campo.addEventListener('input', () => {
    lista.innerHTML = '';

    if (campo.textContent == ''){
        listaStrings.forEach((string) =>{
            let li3 = document.createElement('li');
            li3.textContent = string;
            lista.append(li3);
        });
    }

    listaStrings.forEach((string) => {
        if (string.toLowerCase().includes(campo.textContent.toLowerCase())){
            let li2 = document.createElement('li');
            li2.textContent = string;
            lista.append(li2);
        }
    });
});