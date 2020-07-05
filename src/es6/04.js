// clases con una sintaxis mas clara para 
// manejar objs y la herencia en javascript para aplicar POO

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new Calculator();
console.log(calc.sum(3, 4));


// impor y export para trabajar con modulos
import hello from './module';
console.log(hello());

// los generadores son funciones espeiales que 
// retorna una serie de valores segun el algoritmo definido

function* helloWorld() {
    if (true) {
        yield 'Hello';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);