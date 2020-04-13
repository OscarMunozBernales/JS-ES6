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

// MAS DETALLES DEL OBJETO LITERAL

//BORRAR UNA LLAVE DE UN OBJETO LITERAL
delete personaje.nombre;
console.log(personaje);

//AGREGAR UNA NUEVA KEY AL OL
personaje.casado = true;

//CONVERTIR EL OBJETO LITERAL EN UN ARREGLO
const entriesPares = Object.entries( personaje );
console.log(entriesPares);


// PARA BLOQUEAR UN OB ES DECIR NO PODER MODIFICARLO EN EL FUTURO
Object.freeze( personaje );

//LISTAR TODAS LAS PROPIEDADES DEL OBJETO
const propiedades = Object.getOwnPropertyNames( personaje );
console.log( propiedades );

//LISTAR LOS VALORES DEL BOJETO
const valores = Object.values( personaje );
console.log( valores );