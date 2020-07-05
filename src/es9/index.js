// liberado en junio del 2018
// una caracteristica que se añadio
// operador de reposo el cual puede 
// extraer las propiedades de un obj que aun
// no se ha construido


const obj = {
    name: 'Ed',
    age: 23
};

let {name, ...all} = obj;
console.log(name, all);

// propiedades de propagacion

const obj2 = {
    ...obj,
    country: 'MX',
}

console.log(obj2);

// promise finally

const helloWorld = () => {
return new Promise((resolve, reject) => {
if (true) {
setTimeout(() => {
    resolve('Hello World');
}, 2000);
} else {
    reject(new Error('Error'));
}
});
};

helloWorld().then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('Finalizo');
});

// agrupar bloques de rejects(expresiones regulares)

const regexData = /([0-9]{4})-([0-9]{2}-([0-0]{2}))/;


const match = regexData.exec('2018-04-20');


const year = match[0];
const month = match[1];
const day = match[2];

console.log(year);
console.log(month);
console.log(day);
