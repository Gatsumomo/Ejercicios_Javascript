/* 
console.log("Hola");

var nombre = "Hola";
var nombre = "Ariana"

console.log(nombre);


var nombre = undefined;
console.log(nombre);

function saludar(){
    return "Hola";
}
console.log(saludar());

function despedir(nombre){
    return nombre;
}
console.log(despedir("Hola maldito"));

//var-let(obligas a que sea local la variable)-const
var nombre = true;
console.log(nombre);

console.log(Number(23));
console.log(String("arepa con jamon y queso"));
console.log(Boolean(nombre));

//coercion explicita --> falsy y truthy
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(NaN)); //Not A Number

console.log(Boolean(!!0));
console.log(Boolean(!!""));
console.log(Boolean(!!null));
console.log(Boolean(!!undefined));
console.log(Boolean(!!NaN));
console.log(Boolean(!!false));

console.log(Boolean(13));
console.log(Boolean("Hola"));
console.log(Boolean(true));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(2+2);
console.log(2/2);
console.log(2*2);
console.log(2/0);

var variable = 9;
console.log(--variable);
console.log(--variable);
console.log(--variable);
console.log(--variable);
console.log(--variable);
console.log(--variable);
console.log(--variable);
console.log(--variable);
console.log(--variable);
console.log(--variable);
console.log(++variable);

var a = 3;
var b = 3;


console.log(a++);
console.log(a);
console.log(++b);
console.log(b);


//ejemplo

var c = 4
var d = 4

console.log(c++)
console.log(c)
console.log(++d)
console.log(d)

//contracciones
var contador = 1

console.log(contador += 2)
console.log(contador -= 1)
console.log(contador *= 5)
console.log(contador /= 2)
 */
var clave = true
var pase = false

var ma = 3
var me = 6

if(clave !== pase){
    console.log("tu mama")
}else{
    console.log("mi mama")
}

if(clave || pase){
    console.log("tu mama")
}else{
    console.log("mi mama")
}


if((ma <= 3) || (me => 6)){
    console.log("tu mama")
}else{
    console.log("mi mama")
}    

if((ma <= 3) && (me => 6)){
console.log("tu mama")
}else{
    console.log("mi mama")
}

if(!((ma <= 3) && (me => 6))){
    console.log("tu mama")
}else{
    console.log("mi mama")
}
    