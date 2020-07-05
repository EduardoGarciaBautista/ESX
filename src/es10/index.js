// lannzado en junio de 2019

let array = [123, [1,2,3, [1,2,3]]];

console.log(array.flat());

// flat map mapear cada elemto y pasarle una funcion


console.log(array.flatMap( value => [value *2]));


// trim start y end elimina espacios en blanco

let hello = '      hello        ';


console.log(hello);
console.log(hello.trimStart());

console.log(hello.trimEnd());


// optional cathc binding

try {
    
} catch {
    error
}

// Object entries tranforma arreglos a objetos

let entries = [["name", "oscar"]];

console.log(Object.fromEntries(entries));


let mySymol = 'My symbol';

let symbol = Symbol(mySymol);

console.log(symbol.description);
