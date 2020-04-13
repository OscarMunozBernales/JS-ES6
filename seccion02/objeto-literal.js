//OBJETO LITERAL SON COMO LOS DICCIONARIOS EN PYTHON

//cuando hay lleves asociadas a una variable es porque es un objeto.
let personaje = {
    nombre          : 'Tony Stark', //llave : valor llave
    codeName        : 'Ironman',
    isALife         : false,
    edad            : 40,
    coords          : {
        lat     : 34.034,
        long    : -118.70
    },
    trajes          : ['mark I', 'Mark V', 'Hulkbuster'],
    direccion       : {
        zip         : '10880, 90265',
        ubicacion   : 'Malibu, California'
    },
    ultimaPelicula  : 'Infinity War'
};

console.log(personaje.coords.lat);
console.log(personaje['nombre']);
