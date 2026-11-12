let navegador = document.createElement('li');
navegador.textContent = 'Navegador: ' + navigator.userAgent;

let idioma = document.createElement('li');
idioma.textContent = 'Idioma: ' + navigator.language;

let valorCookies = (navigator.cookieEnabled)? 'sí' : 'no';
let cookies = document.createElement('li');
cookies.textContent = 'Cookies habilitadas: ' + valorCookies;

let valorConect = (navigator.onLine)? 'online' : 'offline';
let conexion = document.createElement('li');
conexion.textContent = 'Conexión: ' + valorConect;

let lista = document.querySelector('#info');
lista.append(navegador);
lista.append(idioma);
lista.append(cookies);
lista.append(conexion);