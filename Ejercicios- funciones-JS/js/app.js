// 1. Crea una función que reciba dos números y devuelva su suma.

// function suma(a, b) {
//     return a + b;
// }

// alert(suma(8, 9));


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

// function getMaxValue(nmulist) {
//     let max = 0;
//     for( let i = 0; i < nmuList.length; i++){
//       if ( numList[i] > max){
//         max = numList [i];
//          }
//     }
//     return max;
// }
// const lista = [2, 4, 6, 42, 32];
// let numMax = getMaxValue(lista);



// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.

    // function cuentaVocales(frase) {
    //     let numVocales = 0;
    //    const vocales= "aeiouAEIOU";

    //     for (let i = 0; i < frase.length; i++) {
    //             for(let j = 0; j < vocales.length; j++) {
    //                 if(frase[i] === vocales[j]) {
    //                     numVocales++;
    //                     break; //Cuando encuentre la vocal ya no comprobara las demas
    //                 }       
    //             }
    //     }
    //     return numVocales;
    // }
    // console.log(cuentaVocales("calabaza"));




// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.

// function minusToMayus(lista) { //TERCER PASO
//     const mayus = []
//     for (let i = 0; index < lista.length; i++) {
//         const element = lista[i];
//        mayus.push(element.toUpperCase()); //TOUPPERCASE CONVIERTE EN MAYUSCULA
        
//     }
//     return mayus;
// }

// const deportes = ["futbol", "tenis", "padel"]; //PRIMER PASO
// console.log(minusToMayus(deportes)); //SEGUNDO PASO



// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

// function esprimo(num) {
//     //Si es menor o igual a 1 no se consideran primos
//     if (num <=1){
//         return false;
//     }

//     for (let i = 2; i < num; i++) {
//         //si encontramos una no es primo
//       if (num % i ===0) {
//         return false;
//       }
        
//     }
//     //si llegamos al final es primo
//     return true;
// }

// // Ejemplo de uso
// console.log(esprimo(7)); // true
// console.log(esprimo(10)); // false



// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

// function getComunes(arrA, arrB) {
//     const comunes =[]
//     for (let i = 0; i < arrA.length; i++) {
//         const elemento = arrA[i];
//       if ( arrB.includes(elemento)){
//         comunes.push(elemento); //push lo incluye en comunes.
//       }
//     }

//     return comunes;
// }
// //Hay dos tipos más de listas en JS , el Map y Set
// const a = [2, 3, 5, 7] ;
// const b = [ 3, 6, 9, 5] ;
// getComunes(a, b); //deberia devolver[3,5]
// console.log(getComunes(a, b))



// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

//si es par lo sumamos y sino lo dejamos

function sumaPares(arr) {
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            suma += arr[i];
        }
        
    }

    return suma;
}

const numeros = [1, 2, 3, 4, 5, 6];
console.log(sumaPares(numeros));



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

// function numCuadrado(listaNum) {
//     const listaNumcuadrado = [];
//    for (let i = 0; index < lista.length; i++){
//     const element = listaNum[i];
//     const cuadrado = element * element;
//     listaNumcuadrado.push(cuadrado);
//    }
//    return listaNumcuadrado;
// }
       


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

//"este fin de semana hay puente" -> ["este", "fin", "de", "semana", "hay", "puente"]
//Hay algun metodo de strings que convierta a array por un delimitador?""
//Hay algun metodo a array que invierta su orden?
//Hay algun metodo a array que lo convierta a string usando un conector?

//"puente hay semana de fin este"

// function reverseWords(text) {
//     const textArr = text.split("").reverse().join(" ");
// }



// 10. Crea una función que calcule el factorial de un número dado.
//Funcion recursiva
function factorial(n) {
    //el factorial 0 o 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    }
   return n * factorial(n - 1);
}




function saludar() {
    console.log("Feliz navidad");
    saludar();
}
