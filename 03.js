let name = 'Eduardo';
let age = 23;

// otra caracteristoca es la propiedad de 
// objetos mejorada permite asignar a un 
// objeto el valor de una variable sin la nesecidad
// de hacer la toda la declaracion {name: 'valor}
// ahora solo  {name} y toma la llave valor de la variable
//name

//es5
let obj = {name: name, age: age};
console.log(obj);

//es6
let obj2 = {name, age};
console.log(obj2);


const names =  [
    {name: 'ED', age},
    {name: 'US', age},
    {name: 'RF', age},
    {name: 'BU', age}
];


//arrow functions
//
let listOfNames = names.map(function(item) {
console.log(item.name);
});
//es6
let listOfItems = names.map(item => {
console.log(item.name);

});

// promesas que en algun momento va suceder algo que se
// esta estableceiendo

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('OK');
        } else {
            reject('BAD');
        }
    });
};

helloPromise().then(result => {
    console.log(result);
}).then(() => {
    console.log('Finalizo');
})
.catch(error => {
    console.error(error);
    
});
