const pets = ["cat", "dog", "bat"];

//Ejemplo 1
/*sensible a mayusculas, espacios delante o detras*/
let included = pets.includes("cat");
console.log(included); // true
console.log('---------------');

//Utilizando cadenas de texto (string)
const saludo = "Hola mundo";

saludo.includes("Hola"); // true
saludo.includes("Mundo"); // false
saludo.includes("Hola",1); // false
saludo.includes("mundo",-5); // true 
saludo.includes("Hola",-9); // true
console.log(saludo.includes("",-9)); // true
/*ENTIENDO QUE: el negativo indica que busque dicha
 palabra a partir de ese indice (derecha a izquiera)*/ 
console.log('---------------');

//Utilizando arrays
const fruits = ["pumpkin", "dragon's fruit", "pineapple", "kiwi"];

fruits.includes("pumpkin"); // true
fruits.includes("Pumpkin"); // false
fruits.includes("pumpkin", 1); // false
fruits.includes("pumpkin", -1); // false
fruits.includes("pumpkin", -2); // true
fruits.includes("pumpkin", -3); // false
fruits.includes("pumpkin", -4); // false
fruits.includes("pumpkin", -5); // false
fruits.includes("pumpkin", -6); // false
fruits.includes("pumpkin", -7); // false
fruits.includes("pumpkin", -8); // false

const frutas = ["manzana","pera","piña","uva"]
//manzanaperapiñauva

frutas.includes("manzana"); // true
frutas.includes("Pera"); // false
frutas.includes("sandia"); // false
frutas.includes("manzana", 1); // false
console.log(frutas.includes("piña",-2))
frutas.includes("uva", -2); // true
console.log('---------------');

//Ejemplo 2
let includeInArray = false;
for (let i = 0; i < pets.length; i++) {
    const item = pets[i];
    if (item === "cat") {
    includeInArray = true;
    break;
  }
}

console.log(includeInArray); // true
console.log('---------------');

//Ejemplo 3
const elements = ["Hola",null,"como","estas"];

let acumulator = "";
const separator = "/";

for(let i=0;i<elements.length;i++){
    const element = elements[i] ?? ""
    if(i !== elements.length-1){
        acumulator += element + separator;
    }else{
        acumulator += element;
    }
}
console.log(acumulator)
console.log('---------------');

//Ejemplo 3 reducido - join

const cajita = ["cosa","mesa","silla","cajon"]
console.log(cajita.join("/"))
console.log('---------------');

//Ejemplo 4
const mensaje = "El aprendizaje es expereincia, todo lo demas es información. Albert Einstein."
console.log(mensaje.split(" "))
console.log(mensaje.split(", "))
console.log(mensaje.split("Albert"))
console.log(mensaje.split(" ", 4))
console.log('---------------');

//Ejemplo 5 - concat
const number1 = [1,2,3,4]
const number2 = [5,6,7,8]
const number3 = [9,10,11,12]

const result1 = number1.concat("Hola","mundo")
const result2 = number1.concat(number2)
const result3 = number1.concat(number2, "hola")
const result4 = number1.concat(number2,number3)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log('---------------');

//Ejemplo 6
const greeting = "Hola mundo"
function includeWithNegativeIndex(string,searchValue,index = 0){
    if(index < 0){
        index = string.length + index;
    }
    return string.includes(searchValue, index)
}

//Ejemplo 7
const array = ["Hola","mundo","como","estas"]
function includesWithNegativeIndex(array,searchValue,index = null){
    if(index === 0){
        index = array.indexOf(searchValue)
    }
    
    if(index < 0){
        index = array.length + index;
    }

    return array[index] === searchValue;
}

console.log(includesWithNegativeIndex(array,"Hola",0)) // true
console.log(includesWithNegativeIndex(array,"Hola",1)) // false
console.log(includesWithNegativeIndex(array,"Hola",2)) // false
console.log(includesWithNegativeIndex(array,"Hola",3)) // false
console.log(includesWithNegativeIndex(array,"Hola",4)) // false
console.log(includesWithNegativeIndex(array,"Hola",-19)) // true
console.log(includesWithNegativeIndex(array,"Hola",-18)) // false 
console.log('---------------');

//Ejemplo 8 - flat 

//3 filas - 3 columnas - MATRIZ 3x3
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]//undefined

const flatMatrix =[]

for(let i=0;i<matrix.length;i++){
    const array = matrix[i]
    for(let j=0;j<array.length;j++){
        const element = array[j]
        //introduce el elemento en el array al final pero empuja los elementos a la izquierda
        flatMatrix.push(element)
    }
}
console.log(flatMatrix.join() + ' - flat en código')
console.log('---------------');

//Ejemplo 9 -flat
const caja = [1,2,[3,4],5,6]
const cajaDeSchrodinger = caja.flat() //lo "aplana"
console.log(cajaDeSchrodinger + ' - solo un flat (con array de profundidad 2)')
console.log('---------------');

//Ejemplo 8 - flat - MANUAL (por defecto es 1 (profundidad))
const box = [1,2,[3,4,[5,6]]]
const schrodingerBox = box.flat() //aplana los dos primeros niveles
const richtig = schrodingerBox.flat() //aplana el nivel mas "profundo"

const box2 = [1,2,[3,4,[5,6]]]
const schrodingerBox2 = box2.flat().flat() //aplana hasta el nivel mas profundo (el tercero)

const box3 = [1,2,[3,4,[5,6]]]
const schrodingerBox3 = box3.flat(2)

const box4 = [1,2,[3,4,[5,6,[7,8,[9,10]]]]]
const schrodingerBox4 = box4.flat(Infinity)

console.log(richtig + ' - flat sobre variable y flat sobre esa variable')
console.log(schrodingerBox2 + ' - doble flat en linea')
console.log(schrodingerBox3 + ' - indicando profundidad 2')
console.log(schrodingerBox4 + ' - Infinity')
console.log('---------------');

//Ejemplo 9
const strings = ["Nunca pares","de Aprender"]

strings.map(string => string.split(' '))
strings.flatMap(string => string.split(' '))

//Ejemplo 10 - flat/flatmap
/* const numbers = [1,2,3,4]
numbers.map(number => number * 2)
/*
    numbers.map(number => {number * 2})
    error - habria que indicar return en caso de parentesis 

numbers.flatMap(number => number * 2)
*/

//Ejemplo 11
const numbers = [1,[2,3],4,5].flat(Infinity)
/* numbers.map(number => number * 2)
 */
numbers.flatMap(number => number * 2)


