//funcion isFinite
console.log(isFinite()); //es finito 
console.log(isFinite(Infinity)); //no es finito
console.log("---------------")

//funcion isNaN
console.log(isNaN("")) //null-undefined | falso
console.log(isNaN("hola")) //true
console.log(isNaN(42)) //falso

console.log("---------------")
//funcion parseInt
let numeroEntero = parseInt('10')
console.log(typeof(numeroEntero) + ' - ' + numeroEntero) //output

console.log("---------------")
//funcion parseFloat
let numeroDecimal = parseFloat(3,1444444444444)
console.log(typeof(numeroDecimal) + ' - ' + numeroDecimal) //output

console.log("---------------")
//funcion decodeUri
let urlCodificada = 'https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82?key=%D1%8A';
let urlDecodificada = decodeURI(urlCodificada)
console.log(urlDecodificada) //output

console.log("---------------")
//funcion decodeURIComponent 
let componenteCodificado = '%D0%A2%D0%B5%D1%81%D1%82?key=%D1%8A';
let componenteDecodificado = decodeURIComponent(componenteCodificado);
console.log(componenteDecodificado) //output

console.log("---------------")
//funcion encodeURI
let url = 'https://ru.wikipedia.org/wiki/Тест?key=ъ'; //https://ejemplo.com/?param=ácido
let urlCodificado = encodeURI(url);
console.log(urlCodificado)

console.log("---------------")
//funcion encodeURIComponent
let componenteCodificada = 'Тест?key=ъ';
let componenteDecodificada = encodeURIComponent(componenteCodificada)
console.log(componenteDecodificada)

//component es mas efectivo --> recomendacion Al
console.log("---------------")
//funcion escape (OBSOLETO)
let texto = 'Hola Clase, cómo estáis?'
let 

//funcion unescaped (OBSOLETO)
