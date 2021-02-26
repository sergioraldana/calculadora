const Mousetrap = require('mousetrap');

Mousetrap.bind('1', clickUno);
Mousetrap.bind('2', clickDos);
Mousetrap.bind('+', clickSuma);


document.getElementById('botonUno').addEventListener('click', clickUno);
document.getElementById('botonDos').addEventListener('click', clickDos);
document.getElementById('botonTres').addEventListener('click', clickTres);
document.getElementById('botonCuatro').addEventListener('click', clickCuatro);
document.getElementById('botonCinco').addEventListener('click', clickCinco);
document.getElementById('botonSeis').addEventListener('click', clickSeis);
document.getElementById('botonSiete').addEventListener('click', clickSiete);
document.getElementById('botonOcho').addEventListener('click', clickOcho);
document.getElementById('botonNueve').addEventListener('click', clickNueve);
document.getElementById('botonCero').addEventListener('click', clickCero);




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