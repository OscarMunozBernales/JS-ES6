# Sección 02
Temas puntuales de la sección 2
1. Tipos de datos primitivos
2. Introducción general a los tipos primitivos.
3. Palabras reservadas y nombre de variables
4. Arreglos
5. Más detalles sobre los objetos literales.
6. Funciones basicas de flecha
7. Retorno de las funciones
8. Pro tip: funciones, argumentos y desestructuración de objetos.

# 1. Tipos de datos primitivos.
JS es un lenguaje debilmente tipado, nosotros explicitamente no le decimos a js que una variable va a contener un numero o un string.
Los tipos de datos primitivos es información que no es un objeto y son inmutables.
Existen 6 tipos de datos primitivos:
1. Boolean - true/false :: verdadero y false
2. null - sin valor en lo absoluto
3. Undefine - una variable declarada que aún no se le asigna valor.
4. Number - integers, float, etc.
5. String - Una cadena de caracteres, ej: Palabras, nombre de personas, etc.
6. Symbol - Es un valor único que no es igual a ningún otro valor.

# 2. Introducción general a los tipo primitivos.
En el archivo primitivos.js trabajamos todo lo que es los tipo de datos primitivos de js.

# 3. Palabras reservadas y nombre de variables.
Las palabras reservadas son palabras que no se pueden ocupar como nombre de variablas, por ejemplo 
```js
let const = 123; //const no se puede ocupar como nombre de variable
```
A continuación voy a mostrar una lista de palabras reservadas en js:

|Palabras reservadas|||
|-------|--------|------------|
|break|export|super|
|case|extends|switch|
|catch|finally|this|
|class|for|throw|
|const|function|try
|continue|if|typeof
|debugger|import|var
|default|in|void
|delete|instanceof|while
|do|new|with
|else|return|yield
|let||

A continuación una de las formas de declarar varaibles en js, tratar de evitar caracteres especiales en la declaracion de variables.

```js
let $holaMundo = 123; //tratar de eviar caracteres especiales.

let camelCase = 123; // NOMBRE DE VARIABLES PRIMERA MINUSCULA SEGUNDA PALABRA MAYUSCUAL

class HolaMundo{} //UpperCamelCase todas las palabras comienzan con mayusculas

```

# 4. Arreglos
Los arreglos son muy parecidos a una lista de información, que contienen un grupo de elementos.
Usualmente esa información dentro del arreglo es del musmo tipo de datos ejemple:
```js
//EXISTEN DOS FORMAS DE DECLARAR UN ARREGLO
const arr = new Array(10); //ES UN ARREGLO CON 10 CASILLAS VACIAS
const arr = [] //ES UN ARREGLO VACIO


let videoJuegos = ['Mario3', 'megaman', 'Final Fantasy IX', 'FIFA 20', 'A plage tale inocent'] // cuando vemos una declaracion de varaibles que comienze con [ y termine con ] es porque estamos tratando con un arreglo

let arregloVacio = [] //esto es un arreglo vacio.

// LOS ARREGLOS EN JS TIENEN UN INDICE QUE COMIENZA EN 0 Y TERMINA EN N (DEPENDIENDO DE CUANTAS CASILAS TIENE) POR EJEMPLO
let videoJuegos = ['Mario3', 'megaman', 'Final Fantasy IX', 'FIFA 20', 'A plage tale inocent'] // TIENE UN INDICE QUE COMIENZA EN 0 Y TERMINA EN 4, Y EL ARREGLO TIENE 5 ELEMENTOS
videoJuego[0] //imprimimios la casilla en el indice 0 = Mario3
videoJuego[4] //Imprime A plage tale inocente
```

Dentro de los arreglos podemos ingresar todo tipo de variables string, numeric, bool, functions, objeto literal:
```js

let arregloCosas = [
    true,
    123,
    1 + 2,
    function(){}, //FUNCION NORMAL
    () => {}, //FUNCION DE FLECHA
    {a : 1}
]

```

# 5. Más detalles sobre los arreglos.
```js
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

```

# 6. Objetos literales