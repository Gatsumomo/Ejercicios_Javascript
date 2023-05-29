//EJEMPLO 1 - SIN SOME
const numbers = [1,1,1];
let resultado = false;
let number = null;

for(let i=0;i<numbers.lenght;i++){
    let check = numbers[i];
    number = check;
    if(check % 2 === 0){
        resultado = true;
    }
}
console.log(resultado + " - " + number);
console.log('-----------------------')

//EJEMPLO 2 - CON SOME
const numeros = [1,3,5];
const answer = numeros.some((num) => num % 2 === 0);
console.log(answer);
console.log('-----------------------')

//EJEMPLO 3 - CON SOME
const numeros2 = [1,3,5];
const answer2 = numeros2.some((item) => item % 2 === 0);
console.log(answer2);
console.log('-----------------------')

//EJEMPLO 4 - CON SOME
const nummer = [1,3,5];
const antwoord = nummer.some((item) => item % 2 === 0);
if(antwoord === true){
    //ALTERNATIVA - antwoort !== undefinded
    console.log("¿Hay par? (false-no|true-si): ", antwoord);
}else{
    console.log("¿Hay par? (false-no|true-si): ", antwoord);
}
console.log('-----------------------')

//EJEMPLO 5 - SIN EVERY
const nummer2 = [5,10,15,20,30,40,50,60];
let antwoord2 = true;
let mitgleid = null;

for(let i=0;i<nummer2.lenght;i++){
    let checked = nummer2[i];
    if(checked >= 40){
        antwoord2 = false;
        mitgleid = checked;
        break;
    }
}
console.log(antwoord2 + ' - ' + mitgleid);
console.log('-----------------------')

//EJEMPLO 6 - CON EVERY
const nummer3 = [1,2,3,4,5];
//.find(condicion)
const antwoord3 = nummer3.find((item) => item % 2 === 0);
const antwoord4 = nummer3.findIndex((item) => item % 2 === 0);

console.log(antwoord3); //find - devuelve el primer elemento que cumple la condición
console.log(antwoord4); //findIndex - Devuelve el índice del primer elemento que cumple la condición
console.log('-----------------------')

//EJEMPLO 7 
const elementos = [5,10,15,20,30,40,50,60];

const recorrida = elementos.find((item) => item >= 40);
const recorrida2 = elementos.findIndex((item) => item >= 40);

console.log(recorrida); 
console.log(recorrida2);
console.log('-----------------------')



