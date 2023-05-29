/* function calculo(ejemplo){
    for(let j=0;j<ejemplo.length;j++){
        for(let k=0;k<ejemplo.length;k++){
            if(ejemplo[j] === ejemplo[k]){
                ejemplo.splice(k,1);
                if(!(ejemplo.lenght === 7)){
                    for(let i=0;i<7;i++){
                        const number = Math.floor(Math.random()*10);
                        ejemplo.push(number);    
                    }
                }
            }
        }
    }
}
 */

/* console.log(ejemplo.join())  */


//ordenacion del array ------->predefinido<-------
/* const array = [4,3,2,1,5,6,7];
for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
        if(array[i] < array[j]){
            let num = array[i];
            let numm = array[j];
            array[i] = numm;
            array[j] = num;
        }
    }
}

console.log(array.join());  */

//EJERCICIO RESUELTO

//Creacion del array con numeros ------->no predefinidos<-------
const ejemplo = []
for(let i=0;i<7;i++){
    const number = Math.floor(Math.random()*10);
    ejemplo.push(number);
}

const array = [1,5,4,6,4,3,2,8,7]
let n = array.length

//diferencia innerText y innerHTML

//el -1 es para que no se pase con los indices
for(let i=0;i<n-1;i++){
    for(let j=0;j<n-1-1;j++){
        if(array[j] > array[j+1]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}

/* 
for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
        if(array[i] < array[j]){
            let num = array[i];
            let numm = array[j];
            array[i] = numm;
            array[j] = num;
        }
    }
} */

/* console.log(ejemplo.join()); */