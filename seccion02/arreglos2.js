let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono Tigger'];

console.log('Largo: ' + juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log(`Primero: '${primero}' y último: '${ultimo}'`);

//RECORRER UN ARRAY
juegos.forEach((value, index, arr) => {
    // console.log(`juegos[${index}] = '${value}'`);
    console.log({value, index, arr});
})

//INSERTAR UN NUEVO ELEMENTO AL FINAL DEL ARRAY
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});
//AHORA VAMOS AGREGAR UN NUEVO ELEMENTO AL INICIO DEL ARREGLO
nuevaLongitud = juegos.unshift('FINAL FANTASY IX');
console.log({nuevaLongitud, juegos});
//AHORA BORRAREMOS UN JUEGO
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});
//BORRAR UN ELEMENTO DE UNA POSICION ESPECIFICA
let posicion = 1;
juegoBorrado = juegos.splice(posicion, 2);
console.log({juegoBorrado, juegos});

//BUSCAR UN ELEMENTO
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex, juegos});