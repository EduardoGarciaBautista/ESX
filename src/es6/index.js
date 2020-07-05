// en ecma script 6 algunos features que se agregaron fueron los
// parametros por defecto


// antes de es6
function newFunction(name, age, country) {
    var name = name || 'Ed';
    var age = country || 20;
    var country = country | 'MX';
}

// con es6 

function newFunction2(name = 'oscar', age = 20, country = 'SU') {
    console.log(name);
    console.log(age);
    console.log(country);    
}

newFunction2('JOSE', 21, 'MX');

// usando template literlas que se usan para separar elementos

let hello = 'Hello';
let World = 'World';

let epicPhrase = hello + ' ' + World;

console.log(epicPhrase);

let epicPhrase2 = `${hello} ${World}`;

console.log(epicPhrase2);
