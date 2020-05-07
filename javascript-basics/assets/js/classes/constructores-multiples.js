class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }

    setNombre(nombre){
        this.nombre = nombre;
    }
}

const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1     = 'Honduras';

const fher = {
    nombre:   'Fernando',
    apellido: 'Herrera',
    pais:     'Costa Rica'
}      

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( fher );


const persona3 = persona1;

persona1.getInfo();
persona2.getInfo();
persona3.getInfo();

persona3.setNombre('Ya no eres melisa');

persona1.getInfo();
persona2.getInfo();
persona3.getInfo(); //VA A CAMBIAR TANTO PERSONA 1 COMO PERSONA 3, PUESTA QUE PERSONA 3 ESTA APUNTANDO A PERSONA 1.


