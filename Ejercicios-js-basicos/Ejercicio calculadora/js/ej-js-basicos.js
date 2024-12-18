//Pedir un operador
const operador = prompt("Escribe el operador:  +, -, *, /");

//Pedir un numero
const a = parseFloat(prompt("Primer operando: "));

//Pedir otro numero
const b = parseFloat(prompt("Segundo operando: "));

//realizar el calculo segun el operador
// alert(eval("" + a + "" + operador + "" + b)); Ojo, no usar eval en produccion
let resultado;
if(operador === '+'){
    resultado = a + b;
}else if(operador === '-'){
    resultado = a - b;
}else if(operador === '*'){
    resultado = a * b;
}else{
    resultado = a / b;
}

//mostrar el resultado
alert( "El resultado es  " + resultado);






