//FUNCIONES NORMALES Y DE FLECHA

//FUNCIONES NORMALES
function saludar(){
    console.log( arguments );
    console.log('Hola mundo!');
}

saludar(123, 123, 3333);

const saludar2 = function(){ //ESTA ES UNA FUNCION ANONIMA
    console.log('Hola mundo! 2');
}



saludar2();


//FUNCIONES FLECHA

const saludarFlecha = () => {
    // console.log( arguments ); //NO FUNCIONA EN FUNCIONES FLECHA
    console.log('SALUDAR FLECHA');

}

const saludarUsuario = (nombre) => {
    console.log( 'Hola ' + nombre );
}

saludarFlecha();
saludarUsuario('Oscar');