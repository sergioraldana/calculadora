const Mousetrap = require('mousetrap');

Mousetrap.bind('1', clickUno);
Mousetrap.bind('2', clickDos);
Mousetrap.bind('+', clickSuma);


document.getElementById('botonUno').addEventListener('click', clickUno);
document.getElementById('botonDos').addEventListener('click', clickDos);
document.getElementById('suma').addEventListener('click', clickSuma);

let actualElemento = document.getElementById('numeroActual');
let resultadoElemento = document.getElementById('resultado');

let actual = '';
let resultado = 0;

function clickUno() {
    actual += 1;
    actualElemento.innerHTML = actual;
}


function clickDos() {
    actual += 2;
    actualElemento.innerHTML = actual;
}

function clickSuma() {
    if (actual != '') {
        resultado += parseInt(actual);
        actual = '';
        actualElemento.innerHTML = '0';
        resultadoElemento.innerHTML = resultado;
    }
}