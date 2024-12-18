//Genera un numero aleatorio entre el 1 y el 100
const secretNumber = Math.floor(Math .random () *100) +1; //USAR CONST  //FLOOR QUITA EL DECIMAL //RANDOM DA UN NUMERO ALEATORIO  //QUE EMPIECE POR 1   
//Inicializar variables
const maxIntentos = 6;  //INTENTOS MAXIMOS
let intentos = 0; //EMPEZAMOS POR 0 INTENTOS

let acierto = false; //Bandera para saber si el jugador ha adivinado  //POR AHORA EL INTENTO ES FALSO, NO HEMOS ACERTADO
//Miramos si cumple la condicion:
//jugar mientras no hemos acertado y tenemos intentos
while (intentos < maxIntentos && !acierto){ // INTENTOS: NUMEROS DE INTENTOS QUE LLEVO //MAXIMO DE INTENTOS  // ACIERTO: AUN NO HE ACERTADO
    let numeroJugador = parseInt(prompt("Introduce un numero entre 1 y 100"));
// Si NO acierta damos ayuda al jugador de si es mayor o menor
//Si acierta ha ganado
if(numeroJugador === secretNumber){
    acierto=true;
}else if(numeroJugador < secretNumber){
 alert("No llegas");
}else {
    alert("Te pasaste");
}
//incrementa el numero de intentos    
intentos++;
}
    
//Mostramos has ganado si has  acertado
//Mostramos has perdido si no ha ganado  
