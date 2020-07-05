// otra caracteristica de es6 es la multilinea en un string


// antes de es6

let lorme = 'Lorem ipsum \n' 
+ ' es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final';

console.log(lorme);

// con es6

let lorem2 = `Lorem 
ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final`;

console.log(lorem2);


// de estructuracion de elementos

let person = {
    name: 'Ed',
    age: 23,
    country: 'MX'
};

// antes de es6

console.log(person.name);
console.log(person.age);
console.log(person.country);

// deesctructurando con es6

const {age} = person;

console.log(age);


// operador de propagacion para unir arreglos

let team1 = ['os', 'ju', 'ed'];

let team2 = ['gu', 'val', 'jes'];

let education = ['dav', ...team1, ...team2];


console.log(education);


// let y const 

// con var esta disponible de forma global, con let
//  solo dentro de su scope


{
    var globalVar = 'global var';
}

{
    let globalLet = 'global let';
    console.log(globalLet);
}

console.log(globalVar);

// const permite establecer una variable 

const a = 'b';

// a = 'e'; // error en ejecucion debido a la asignacion

console.log(a);


