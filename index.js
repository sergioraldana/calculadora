const Mousetrap = require('mousetrap');
let actualElemento = document.getElementById('numeroActual');
let resultadoElemento = document.getElementById('resultado');
let historial = document.getElementById('operaciones');
let operaciones = "";

let actual = '';
let resultado = 0;

Mousetrap.bind('1', clickUno);
Mousetrap.bind('2', clickDos);
Mousetrap.bind('3', clickTres);
Mousetrap.bind('4', clickCuatro);
Mousetrap.bind('5', clickCinco);
Mousetrap.bind('6', clickSeis);
Mousetrap.bind('7', clickSiete);
Mousetrap.bind('8', clickOcho);
Mousetrap.bind('9', clickNueve);
Mousetrap.bind('0', clickCero);

Mousetrap.bind('+', clickSuma);
Mousetrap.bind('-', clickResta);
Mousetrap.bind('/', clickDivision);
Mousetrap.bind('*', clickMulti);

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
document.getElementById('botonC').addEventListener('click', clear);
document.getElementById('botonAC').addEventListener('click', AllClear);


document.getElementById('suma').addEventListener('click', clickSuma);
document.getElementById('resta').addEventListener('click', clickResta);
document.getElementById('division').addEventListener('click', clickDivision);
document.getElementById('multi').addEventListener('click', clickMulti);

function agregarHistorial(operador1, operacion, operador2, resultado) {
    nuevaOperacion = `<li>${operador1} ${operacion} ${operador2} = ${resultado} </li>`
    operaciones += nuevaOperacion;
    historial.innerHTML = operaciones;
}


function clickSuma() {
    if (actual != '') {
        let operador2 = actual;
        let operador1 = resultado;
        resultado += parseInt(actual);
        actual = '';
        actualElemento.innerHTML = '0';
        resultadoElemento.innerHTML = resultado;

        agregarHistorial(operador1, operacion = "+", operador2, resultado);
    }
}

function clickResta() {
    if (actual != '') {
        let operador2 = actual;
        let operador1 = resultado;
        resultado -= parseInt(actual);
        actual = '';
        actualElemento.innerHTML = '0';
        resultadoElemento.innerHTML = resultado;

        agregarHistorial(operador1, operacion = "-", operador2, resultado);
    }
}

function clickDivision() {
    if (actual != '' && resultado != 0) {
        let operador2 = actual;
        let operador1 = resultado;
        resultado /= parseInt(actual);
        actual = '';
        actualElemento.innerHTML = '0';
        resultadoElemento.innerHTML = resultado;

        agregarHistorial(operador1, operacion = "/", operador2, resultado);
    } else {
        resultado = actual;
        actual = '';
        actualElemento.innerHTML = '0';
        resultadoElemento.innerHTML = resultado;
    }
}

function clickMulti() {
    if (actual != '' && resultado != 0) {
        let operador2 = actual;
        let operador1 = resultado;
        resultado *= parseInt(actual);
        actual = '';
        actualElemento.innerHTML = '0';
        resultadoElemento.innerHTML = resultado;

        agregarHistorial(operador1, operacion = "x", operador2, resultado);
    } else {
        resultado = actual;
        actual = '';
        actualElemento.innerHTML = '0';
        resultadoElemento.innerHTML = resultado;
    }
}


function clear() {
    if (actual != '') {
        actual = '';
        actualElemento.innerHTML = '0';
    }
}

function AllClear() {
    if (actual != '' || resultado != '') {
        clear();
        resultado = 0;
        resultadoElemento.innerHTML = resultado;
    }
}



function clickUno() {
    actual += 1;
    actualElemento.innerHTML = actual;
}

function clickDos() {
    actual += 2;
    actualElemento.innerHTML = actual;
}

function clickTres() {
    actual += 3;
    actualElemento.innerHTML = actual;
}

function clickCuatro() {
    actual += 4;
    actualElemento.innerHTML = actual;
}

function clickCinco() {
    actual += 5;
    actualElemento.innerHTML = actual;
}

function clickSeis() {
    actual += 6;
    actualElemento.innerHTML = actual;
}

function clickSiete() {
    actual += 7;
    actualElemento.innerHTML = actual;
}

function clickOcho() {
    actual += 8;
    actualElemento.innerHTML = actual;
}

function clickNueve() {
    actual += 9;
    actualElemento.innerHTML = actual;
}

function clickCero() {
    actual += 0;
    actualElemento.innerHTML = actual;
}