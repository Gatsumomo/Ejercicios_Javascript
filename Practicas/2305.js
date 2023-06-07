for(let i=0;i<=10;i+=2){
    console.log(i)
    if(i==8){
        break; //abandona el bucle for en el mismo punto en el que está (el 8)
    }
}

console.log('--------------------')
for(let j=0;j<10;j++){
    if(j%2 == 0){
        continue; //se salta todo y continua con el for - PAR
    }
    console.log(j + '- IMPAR')
}

console.log('--------------------')
for(let k=0;k<10;k++){
    if(k%2 == 0){
        continue; //se salta todo y continua con el for - PAR
    }
    console.log(k + '- IMPAR')
    if(k==5){
        break; //abandona el bucle for en el mismo punto en el que está (el 8)
    }
}

console.log('--------------------')
function suma(a,b){
    return a + b;
}

let resultado = suma(2,3)
console.log(resultado)

console.log('--------------------')
//le asignas el valor que va a coger
let nombre = prompt('Introduzca su nombre: ')

console.log(nombre)

