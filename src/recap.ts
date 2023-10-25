const myName = 'Nicolas';
const myAge = 40; //si pongo myAge. (me muestra todos sus posibles metodos)

//funcion
const suma = (a: number, b: number) => {
    return a + b;
};
suma(1, 2);

//clases
class Persona {
    private age: number;
    private nombre: string; //si no le asigno ES public

    //constructor
    constructor(age: number, nombre: string) {
        this.age = age;
        this.nombre = nombre;
    }

    //metodo muestra parametros de la clase
    getParametros() {
        return `Mi nombre es: ${this.nombre} y tengo ${this.age}`;
    }
}
//declaracion de clases con TypeScript
class Auto {

    //constructor
    constructor(private patente: number, private marca: string) { }

    //metodo muestra parametros de la clase
    getParametros() {
        return `Patente: ${this.patente} - ${this.marca}`;
    }
}
//instancio clase
const p1 = new Persona(40, "Marcos");
console.log(p1.getParametros());

const auto1 = new Auto(123, "Ford");