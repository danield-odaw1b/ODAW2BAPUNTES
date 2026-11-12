/*let segundos = 0;

const id = setInterval(() => {
  segundos++;
  console.log(`Llevas ${segundos} s`);
  if (segundos === 10) {
    clearInterval(id);
  }
}, 1000); */


let bool = false;
document.querySelector(#detener).onClick = () => {
    bool = true;
};

const id = setInterval(() => {
    let horas = getHours();
    let minutos = getMinutes();
    let segundos = getSeconds();

    

    if (bool) {
        clearInterval(#reloj);
    }

}, );