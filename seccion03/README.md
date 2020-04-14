# Ciclos y estructuración de control

1. Valor, referencia y romper la referencia.

# 1. Valor, referencia y romper la referencia.
En el siguiente codigo. 
```js
let a = 10, b = 10;
console.log({a, b});
```
Cuando nosotros trabajamos con primitivos, cualquier tipo de asignacion como la que esta en codigo, la estamos asignando por **valor**
Ahora vamos a pasar por referencia.
```js
//REFERENCIA
let juan = { nombre: 'Juan' }; //CREAMOS UN OBJETO CON LLAVE NOMBRE : JUAN
let ana  = juan // EL OBJETO SE LO ASIGNAMOS A LA VARIABLE ANA

console.log({juan, ana}); //ESTO VA A IMPRIMIR {juan : {nombre:'Juan'}, ana : { nombre: 'Juan' }}

ana.nombre = 'Ana'; //AHORA SI CAMBIAMOS EL NOMBRE DE ANA A 'ana'
console.log({juan, ana}); //ESTO VA A IMPRIMIR { juan : { nombre:'Ana' }, ana : { nombre: 'Ana' } }
```
Al momento de asignar el nombre de Ana al objeto literal ana, va a cambiar tambien el de juan esto es porque en javascript todos **TODOS LOS OBJETOS SON PASADOS POR REFERENCIA** 
Es por esto que **Todos los primitivos se pasan por valor** y **Todos los objetos se pasan por refencia**

Para romper el valor por referencia podmeos hacer lo siguiente:
```js
const cambiaNombre = ({ ...persona }) => { //OCUPAR SPREAD AUNQUE EXISTEN MUCHOS OPERADORES QUE PUEDEN FUNCIONAR MEJOR
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({tony, peter});
```