class Vehiculo {
  constructor(matricula, horaEntrada) {
    this.matricula = matricula;
    this.horaEntrada = horaEntrada;
  }
}

class Plaza {
  constructor(numero) {
    this.numero = numero;
    this.ocupada = false;
  }
  ocupar (){
    this.ocupada = true;
  }
  liberar () {
    this.ocupada = false;
  }
}

class Parking {
  constructor(totalPlazas,precioPorHora = 1 ) {
    this.plazas = [];
    this.precioPorHora = precioPorHora;
    this.vehiculos = new Map (); //MAP ES UNA COLECCION 
      //crear las plazas del parking
      for (let i = 1; i < totalPlazas; i++) {
        this.plazas.push(new Plaza (i));
      }
  }
  registrarVehiculo(matricula){
    //Buscar plaza libre
    const plazaLibre = this.plazas.find((plaza) => !plaza.ocupada)  //BUSCA PLAZA POR PLAZA Y TE DEVUELVE LA QUE ES FALSO(PLAZA OCUPADA FALSO)
    //TODO sinó hay plazas no se puede aparcar
    const horaEntrada = new Date(); //NOS ENSEÑA LA HORA Y EL DIA
    const vehiculo = new Vehiculo(matricula, horaEntrada);
    this.vehiculos.set(matricula, {vehiculo, plaza: plazaLibre})
    plazaLibre.ocupar();
  }
}

const parking = new Parking(10, 6);
