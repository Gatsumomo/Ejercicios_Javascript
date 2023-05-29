function divide(a,b){
    if(b === 0){
        //se va al try-catch
        throw new Error("El divisor no puede ser cero.");
    }
}

try{
    //intenta esto en la funcion
    divide(10,0);
}catch(error){
    //muestra error y el mensaje del error
    console.log(error);
}