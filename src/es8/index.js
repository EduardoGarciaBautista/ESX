// lanzado en junio del 2017

// una caracteristica que se añadio fue Object,entries
// devuelve la llave valor de un objeto en una matriz



const data = {
    front: 'Ed',
    back: 'H',
    design: 'Des'
};

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

// Object values: devuelve los valorres de un objeto 
// a un arreglo


const data2 = {
    front: 'Ed',
    back: 'H',
    design: 'Des',

};

const values = Object.values(data2);

console.log(values);
console.log(values.length);

// otro elemto que se agrego en s8 es el padding
// quye ayuda a agregar elemtos a una cadena de texto 
// sea al inicio o al final
const string = 'hello';

console.log(string.padStart(8, 'hi '));

console.log(string.padEnd(12, ' _____'));

//tambien se agrego el trailing coma

const obj = {
    val: 'osc',
};

// asyn await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => {
                resolve('Hello World');
            }, 4000);
            console.log('Hola');
            
        } else {
            reject(new Error('Error'));
        }
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
    console.log('Hola en async');
    
};

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
        
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();