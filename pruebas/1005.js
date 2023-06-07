/* //Ejemplo de callback con setTimeout
const mensaje = function(){
    console.log("Este mensaje se mostrará despues de 5 segundos")
}
setTimeout(mensaje, 5000)

//Definir una funcion directamente en el setTimeout - funcion anonima
setTimeout(function(){
    console.log("Este mensaje se mostrará despues de 5 segundos")
}, 5000)

//Callback en forma de arrow function ES6
setTimeout(() => {
    console.log("Este mensaje se mostrará en 5 segundos")
}, 5000) */

//for
const letters = ['a', 'b', 'c']
for(var index = 0; index < letters.length; index++){
    console.log(letters[index])
}

//forEach
letters.forEach(item => console.log('forEach'.item))
