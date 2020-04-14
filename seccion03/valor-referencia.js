// VALOR REFERENCIA Y ROMPER LA REFERENCIA

//VALOR
let a = 10, b = 10;
console.log({a, b});

//REFERENCIA
let juan = { nombre: 'Juan' };
let ana  = juan

console.log({juan, ana});

ana.nombre = 'Ana';
console.log({juan, ana});


// ROMPOER EL VALOR POR REFENCIA
console.log("==================PERSONAS======================");
const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({tony, peter});

console.log("==================FRUTAS======================");
const frutas = ['Manzana', 'Pera', 'Piña'];
console.time( 'Spread' );
const otrasFrutas = [ ...frutas ];
console.timeEnd('Spread');

console.time( 'Slice' );
const otrasFrutas2 = frutas.slice();
console.timeEnd('Slice');

otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas});


