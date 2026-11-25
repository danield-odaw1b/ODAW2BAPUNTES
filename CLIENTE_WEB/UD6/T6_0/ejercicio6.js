const fecha = new Date();
const reloj = document.querySelector('#reloj');

let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
if (horas < 10){
  horas = '' + 0 + horas;
}
if (minutos < 10){
  minutos = '' + 0 + minutos;
}
if (segundos < 10){
  segundos = '' + 0 + segundos;
}
reloj.textContent = horas + ":" + minutos + ":" + segundos;

const id = setInterval(() => {
    const fecha2 = new Date();
    horas = fecha2.getHours();
    minutos = fecha2.getMinutes();
    segundos = fecha2.getSeconds();
    if (horas < 10){
      horas = '' + 0 + horas;
    }
    if (minutos < 10){
      minutos = '' + 0 + minutos;
    }
    if (segundos < 10){
      segundos = '' + 0 + segundos;
    }
    reloj.textContent = horas + ":" + minutos + ":" + segundos;
},1000);

document.querySelector('#detener').addEventListener('click', () => {
  clearInterval(id);
});