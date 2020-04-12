

//const arr = new Array(10); //ES UN ARREGLO VACIO CON 10 ESPACIOS
// const arr = [];

// console.log(arr);

let videoJuego = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({videoJuego}); 
console.log(videoJuego[0]); // IMPRIMIMOS LA PRIMERA POSICIÓN

let arregloCosas = [
    true,
    123,
    'Oscar',
    1 + 2,
    function(){}, //FUNCION NORMAL
    () => {}, //FUNCION DE FLECHA
    {a : 1}
]

console.log(arregloCosas);

// EJERCICIO IMPRIMIR UN SUB ELEMENTO DEL ARREGLOCOSAS EL ELEMENTO 'Dr. Light'
arregloCosas = [
    true,
    123,
    'Oscar',
    1 + 2,
    function(){}, //FUNCION NORMAL
    () => {}, //FUNCION DE FLECHA
    {a : 1},
    ['X', 'Zero', 'Megaman','Dr. Light']
]

//RESULTADO
console.log(arregloCosas[7][3]);