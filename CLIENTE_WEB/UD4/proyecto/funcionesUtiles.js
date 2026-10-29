function contienePalabra(texto, palabra){
    var res = false;
    let dividido = texto.split(' ');
    for (const div of dividido){
        if (palabra == div){
            res = true;
            break;
        }
    }
    return res;
}

module.exports = {
    contienePalabra
}