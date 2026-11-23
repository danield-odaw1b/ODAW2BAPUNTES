const productos = document.querySelectorAll('#productos button');
let carrito = document.querySelector('#carrito');

let total = document.querySelector('#total');
let totalNum = Number(0.00);
total.textContent = 'Total: 0.00 €';

productos.forEach((producto) => {
    producto.addEventListener('click', () => {
          const li = document.createElement('li');
          li.textContent = producto.textContent + ': ' + producto.dataset.precio + ' €';
          carrito.append(li);
          const num = Number(producto.dataset.precio).toFixed(2);
          totalNum = (Number(totalNum) + Number(num)).toFixed(2);

          total.textContent = 'Total: ' + totalNum + ' €';
    });
});