//ARRAY DE OBJETOS DE JS
const personas = [
    {
    id: 1,
    nombre: 'Alice',
    edad: 28,
    direccion: {
    ciudad: 'Nueva York',
    pais: 'Estados Unidos'
    },
    hobbies: ['lectura', 'pintura']
    },
    {
    id: 2,
    nombre: 'Bob',
    edad: 35,
    direccion: {
    ciudad: 'Londres',
    pais: 'Reino Unido'
    },
    hobbies: ['correr', 'cocinar']
    },
    {
    id: 3,
    nombre: 'Charlie',
    edad: 22,
    direccion: {
    ciudad: 'París',
    pais: 'Francia'
    },
    hobbies: ['jardinería', 'fotografía']
    },
    {
    id: 4,
    nombre: 'David',
    edad: 32,
    direccion: {
    ciudad: 'Tokio',
    pais: 'Japón'
    },
    hobbies: ['viajar', 'programar']
    },
    
    {
    id: 5,
    nombre: 'Eve',
    edad: 29,
    direccion: {
    ciudad: 'Sídney',
    pais: 'Australia'
    },
    hobbies: ['ciclismo', 'tocar música']
    }
    ];
    // // Ejercicio 1: Usa forEach para imprimir en la consola el nombre y la
    // ciudad de cada persona
    // personas.forEach((persona) => {
    //     console.log(`${persona.nombre} (${persona.direccion.ciudad})`);
    //   }); 

    // // Resultado esperado: Alice (Nueva York), Bob (Londres), Charlie
    // (París), David (Tokio), Eve (Sídney)



    // // Ejercicio 2: Crea un nuevo array con objetos que contengan el nombre,
    // la edad y la ciudad de cada persona
    // const newPersonas = personas.map((persona) =>{
    //   const newPersona ={
    //     nombre: persona.nombre,
    //     edad: persona.edad,
    //     ciudad: persona.direccion.ciudad
    //   };
    //     return newPersona
    // });
    // console.log(newPersonas);
    

    // // Resultado esperado: [{ nombre: 'Alice', edad: 28, ciudad: 'Nueva
    // York' }, ...]



    // // Ejercicio 3: Filtra las personas que tienen hobbies que incluyen 'lectura'
    const numbers = [];
    const lecturas = personas.filter((persona) => {
     persona.hobbies.includes("lectura");
      });
      console.log(lecturas);
      
    // // Resultado esperado: [{ nombre: 'Alice', ... }]



    // // Ejercicio 4: Calcula la suma de las edades de todas las personas usando reduce
    const totalEdades = personas.reduce((total, persona) => {
       return (total += persona.edad);
      }, 0);
      console.log(totalEdades);

    // // Resultado esperado: 146



    // // Ejercicio 5: Comprueba si al menos una persona es menor de 21 años usando some
    // const testMenor = personas.some((persona) =>{
    //   return persona.edad < 21; 
    // });
    // console.log(testMenor);

    // // Resultado esperado: true/false
  


    // // Ejercicio 6: Encuentra la persona con la edad exacta de 29 años usando find
    // const edad = personas.find((persona) => persona.edad === 29 );
    // console.log(edad);

    // // Resultado esperado: { nombre: 'Eve', ... }



    // // Ejercicio 7: Ordena las personas por edad de forma descendente usando sort
    const edad = personas.toSorted((a, b) =>{
      return b.edad - a.edad;
    });
    console.log(edad);
    
 
    // // Resultado esperado: [{ nombre: 'Bob', edad: 35, ... }, ...]