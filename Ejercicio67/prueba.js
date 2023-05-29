const original = [1, 2, 3, 4, 5];
const copia = original;

copia[0] = 'Modificado';

//los dos apuntan a la mismas tres posiciones en la zona de memoria del ordenador - PELIGROSO

console.log(original + ' original');
console.log('-----------------');
console.log(copia + ' copia')
console.log('-------------------')


//map- let,var,const
//Sintaxis: let otherArray = array.map(function(elemento,indice,array), thisArg)

//push --- va alamcenando de izq a derecha
const numbers = [1,2,3,4,5];
const newNumbers = [];
for(var i=0;i<numbers.lenght;i++){
    const number = numbers[i];
    newNumbers.push(number);
};
console.log(newNumbers);
console.log('-------------------');

//map y callback
const numeros = [1,2,3,4,5]
const nuevosNumeros = numeros.map(function(numero){
    return numero * 2
})
console.log(nuevosNumeros + ' con callback') 
console.log('-------------------')

//map y arrow function
const numeros2 = [1,2,3,4,5]
const nuevosNumeros2 = numeros2.map(numero2 => numero2 * 2)
console.log(nuevosNumeros2 + ' con arrow function')
console.log('-------------------')

//Metodo map reloaded - array con 4 objetos (con 3 propiedades)
const orders = [
    {
        //poner coma al ultimo
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zuleima',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 160,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 340,
        delivered: true,
    },
]
console.log(orders)
console.log('-------------------')

//extrayendo datos necesarios
//array.map(order => order.propiedad)
const customerNames = orders.map(order => order.customerName)
console.log(customerNames)
console.log('-------------------')
const totales = orders.map(order => order.total)
console.log(totales)
console.log('-------------------')
const delivers = orders.map(order => order.delivered)
console.log(delivers)
console.log('-------------------')

//parametros por referencia -- TRANSFORMACION DE OBJETOS (Es decir, modifica el original)

//EJEMPLO QUE ----> SI <---- TRANSORMA EL ORIGINAL
//en teoria el metodo map es inmutable --> el ejercicio demuestra lo contrario
const tarifas = orders.map(order => {
    order.tax = 0.19;
    return order  //order es cada elemento
})
console.log(tarifas);
console.log(orders);
tarifas[0] === orders[0];
tarifas[1] === orders[1];

//transformacion de objetos
//EJEMPLO QUE ----> NO <---- TRANSORMA EL ORIGINAL
const tarifa = orders.map(order => {
    return{
        ...order,
        item: 0.19,
    }
})
console.log(tarifa)
console.log(orders)
tarifas[0] === orders[0];
tarifas[1] === orders[1];

//FOR - funcion filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const newWords = []
for(let i=0;i<words.length;i++){
    const word = words[i];
    if(word.length >= 6){
        newWords.push(word);
    }
}
console.log(words);
console.log(newWords);

//filter
//VERSION 1 - callback
const palabras = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const nuevasPalabras = palabras.filter(function(palabra){
    if(palabra.length >= 6){
        return true;
    }else{
        return false;
    }
})
console.log(palabras);
console.log(nuevasPalabras);

//VERSION 2 - arrow function
const palabras2 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const nuevasPalabras2 = palabras2.filter(palabra => palabra.length >= 6)
console.log(palabras2)
console.log(nuevasPalabras2);

//filter de orders
const newOrders = orders.filter(order => order.total > 150);
console.log(newOrders)

