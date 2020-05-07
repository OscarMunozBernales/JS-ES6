

class Rectangulo {

    #area = 0; // LA INICIALIZACION CON # INDICA QUE ES UN CAMPO PRIVADO, SOLO FUNCIONA CON LAS VARIABLES

    constructor(base = 0, altura = 0) {
        this.base   = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calgularArea() {
        console.log( this.#area * 2 );
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area  = 100;
rectangulo.calgularArea();

console.log(rectangulo);



